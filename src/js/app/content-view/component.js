class contentViewCtrl {
    model = {
        data: 1234
    };

    constructor($scope) {
        this.$scope = $scope;
    }

    method() {
        console.log(this.model);
    }
}

const contentViewDirective = {
    scope: {},
    restrict: "E",
    templateUrl: "./js/app/content-view/content-view.tpl.html",
    controller: ['$scope', classWrapper(contentViewCtrl)]
};

