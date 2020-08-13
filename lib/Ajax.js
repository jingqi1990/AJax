class Ajax {
    constructor(obj) {
        this.url = obj.url || '';
        this.type = obj.type || 'GET';
        this.data = obj.data || {};
        this.dataType = obj.dataType || 'json';
        this.success = obj.success || null;
        this.error = obj.error || null;
    }
    
    send() {
        let self = this;
        if (self.data === null && typeof self.data !== 'object' && Array.isArray(obj))
            return;
        $.ajax({
            type: self.type,
            url: self.url,
            data: self.data,
            dataType: self.dataType,
            timeout: 300,
            success: function (data) {
                isFunction(self.success) && self.success(data);
            },
            error: function (xhr) {
                isFunction(self.error) && self.error(xhr);
            }
        });
    }
}


function isFunction(obj){
    var  toStr = Object.prototype.toString;
    return toStr.call(obj) === "[object Function]"
}
