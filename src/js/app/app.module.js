angular.module("app", ["templates"])
    .directive("app", () => appDirective)
    .directive("contentView", () => contentViewDirective)
    .directive("sidebarView", () => sidebarViewDirective)
    .directive("elementsView", () => elementsViewDirective)
    .directive("summaryView", () => summaryViewDirective);

