class sidebarViewCtrl {
    constructor($scope) {
        this.$scope = $scope;
        this.$scope.model = {
            data: 1234
        };
    }
}

const sidebarViewDirective = {
    scope: {},
    restrict: "E",
        templateUrl: "./js/app/sidebar-view/sidebar-view.tpl.html",
    controller: ['$scope', classWrapper(sidebarViewCtrl)]
}
