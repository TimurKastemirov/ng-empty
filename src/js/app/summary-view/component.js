class summaryViewCtrl {
    constructor($scope) {
        this.$scope = $scope;
    }
}

const summaryViewDirective = {
    scope: {
        item: '=',
        tags: '=',
    },
    restrict: "E",
    templateUrl: "./js/app/summary-view/summary-view.tpl.html",
    controller: ["$scope", classWrapper(summaryViewCtrl)],
};
