
// Loopback helper from https://github.com/strongloop/loopback/issues/651 to disable
// all default methods to have the full control of the api.
// Uncomment both statements to show disabled methods
module.exports.disableAllMethods = function disableAllMethods(model, methodsToExpose) {
  if (model && model.sharedClass) {
    const methodsToExpose2 = methodsToExpose || [];

    // const modelName = model.sharedClass.name;
    const methods = model.sharedClass.methods();
    const relationMethods = [];
    const hiddenMethods = [];

    Object.keys(model.definition.settings.relations).forEach((relation) => {
      relationMethods.push({ name: `__findById__${relation}`, isStatic: false });
      relationMethods.push({ name: `__destroyById__${relation}`, isStatic: false });
      relationMethods.push({ name: `__updateById__${relation}`, isStatic: false });
      relationMethods.push({ name: `__exists__${relation}`, isStatic: false });
      relationMethods.push({ name: `__link__${relation}`, isStatic: false });
      relationMethods.push({ name: `__get__${relation}`, isStatic: false });
      relationMethods.push({ name: `__create__${relation}`, isStatic: false });
      relationMethods.push({ name: `__update__${relation}`, isStatic: false });
      relationMethods.push({ name: `__destroy__${relation}`, isStatic: false });
      relationMethods.push({ name: `__unlink__${relation}`, isStatic: false });
      relationMethods.push({ name: `__count__${relation}`, isStatic: false });
      relationMethods.push({ name: `__delete__${relation}`, isStatic: false });
    });


    methods.concat(relationMethods).forEach((method) => {
      const methodName = method.name;
      if (methodsToExpose2.indexOf(methodName) < 0) {
        hiddenMethods.push(methodName);
        model.disableRemoteMethod(methodName, method.isStatic);
      }
    });

    // if (hiddenMethods.length > 0) {
    //   console.log('\nRemote mehtods hidden for', modelName, ':', hiddenMethods.join(', '), '\n');
    // }
  }
};
