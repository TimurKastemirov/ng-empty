function classWrapper(klass) {
    return (...args) => {
        const instance = new klass(...args);
        mixinToScope(instance, klass, args);
    };
}

function mixinToScope(instance, klass, klassArgs) {
    const notMix = [...klassArgs];
    const scope = instance.$scope;
    if (scope && typeof scope === 'object') {
        for (const [key, value] of Object.entries(instance)) {
            if (notMix.indexOf(value) === -1) {
                instance.$scope[key] = value;
            }
        }

        for (const methodName of Object.getOwnPropertyNames(klass.prototype)) {
            if (methodName !== 'constructor') {
                instance.$scope[methodName] = klass.prototype[methodName].bind(instance);
            }
        }
    }
}
