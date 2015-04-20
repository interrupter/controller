var notController = function(app, controllerName){
    this.app = app;
    this.ncName = 'nc'+(controllerName.capitalizeFirstLetter());
    var that = this;
    $.each(this.app._getInterfaces(),  function(index, interface){
        if (typeof((window[that.ncName]))!=='undefined') (window[that.ncName]).prototype[index] = interface;
    });
}

notController.prototype.exec = function(params){
    new (window[this.ncName])(this.app, params);
}
