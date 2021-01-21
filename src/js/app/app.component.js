class AppDirective {
    constructor($scope) {
        this.$scope = $scope;
        this.$scope.dataList = this.getData();
    }

    getData() {
        return makeDefaultData();
    }

    onSelect($event) {
        const { item } = $event;
        this.$scope.selectedItem = item;
    }

    tagChanged() {
        this.$scope.$broadcast('tagChanged');
    }
}

const appDirective = {
    scope: {},
    restrict: "E",
    templateUrl: "./js/app/app.tpl.html",
    controller: ['$scope', classWrapper(AppDirective)],
}
