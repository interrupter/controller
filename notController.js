var notController = function(app, controllerName){
    this.app = app;
    $.each(this.app._getInterfaces(),  function(index, interface){
        console.log(index, interface);
        var ncName = 'nc'+(controllerName.capitalizeFirstLetter());
        console.log(typeof window[ncName]);
        if (typeof((window[ncName]))!=='undefined') (window[ncName]).prototype[index] = interface;
        console.log(ncName, index, (window[ncName]).prototype[index]);
    });
}

notController.prototype.exec = function(params){
    new ncPublication(this.app, params);
}
