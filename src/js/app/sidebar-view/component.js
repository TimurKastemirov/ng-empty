class sidebarViewCtrl {
    newTag = {
        name: '',
    };

    constructor($scope) {
        this.$scope = $scope;
    }

    removeTag(index) {
        this.$scope.item.tags.splice(index, 1);
        this.$scope.onRemoveTag();
    }

    addNewTag() {
        this.$scope.item.tags.push(this.newTag.name);
        this.newTag.name = '';
        this.$scope.onAddTag();
    }
}

const sidebarViewDirective = {
    scope: {
        item: '=',
        onAddTag: '&',
        onRemoveTag: '&',
    },
    restrict: "E",
        templateUrl: "./js/app/sidebar-view/sidebar-view.tpl.html",
    controller: ['$scope', classWrapper(sidebarViewCtrl)]
}
