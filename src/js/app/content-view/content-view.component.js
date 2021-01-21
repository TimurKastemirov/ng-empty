class contentViewCtrl {
    dataListCopy;
    commands = {
        order: 'title',
        onlyDate: false,
        search: ''
    };

    newItem = {
        title: '',
    };

    DATE_AND_TIME = 'dd.MM.yyyy HH:mm';
    DATE = 'dd.MM.yyyy';

    constructor($scope) {
        this.$scope = $scope;
        this.$scope.dateFormat = this.DATE_AND_TIME;
        this.$scope.selectedItem = {};
        this.$scope.$on('tagChanged', (event) => {
            this.makeCalcs();
        });

        this.makeCalcs();
    }

    setDateFormat() {
        this.$scope.dateFormat = this.commands.onlyDate
            ? this.DATE
            : this.DATE_AND_TIME;
    }

    selectItem(item) {
        this.$scope.selectedItem = item;
        this.$scope.select({ $event: { item } });
    }

    changeOrder() {
        const orderKey = this.commands.order;
        this.$scope.dataList = this.$scope.dataList.sort((item1, item2) => {
            if (item1[orderKey] > item2[orderKey]) {
                return 1;
            } else if (item1[orderKey] < item2[orderKey]) {
                return -1;
            }
        });
    }

    searchByText() {
        this.$scope.dataList = this.dataListCopy
            .filter(item =>
                item.title.toLowerCase().indexOf(
                    this.commands.search.toLowerCase()
                ) !== -1
            );
    }

    addNewItem() {
        this.$scope.dataList.push({
            id: makeDataId(),
            date: (new Date()).toISOString(),
            title: this.newItem.title,
            tags: [],
        });

        this.newItem.title = '';
        this.makeCalcs();
    }

    getLastItem() {
        const maxDateInList = Math.max(...this.dataListCopy.map(item => (new Date(item.date)).getTime()))
        this.$scope.lastItemByDate = this.dataListCopy.filter(item =>
            new Date(item.date).getTime() === maxDateInList
        );
    }

    getUniqueTags() {
        const allTags = this.dataListCopy.map(item => item.tags).flat();
        this.$scope.uniqueTags = allTags
            .filter((value, index, self) => self.indexOf(value) === index);
    }

    syncList() {
        this.dataListCopy = this.$scope.dataList.slice(0)
    }

    getSummary() {
        this.getLastItem();
        this.getUniqueTags();
    }

    makeCalcs() {
        this.syncList();
        this.getSummary();
    }
}

const contentViewDirective = {
    scope: {
        dataList: '=list',
        select: '&',
    },
    restrict: "E",
    templateUrl: "./js/app/content-view/content-view.tpl.html",
    controller: ['$scope', classWrapper(contentViewCtrl)]
};

