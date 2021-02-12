odoo.define('show_chatter_on_modal.form_renderer.js', function (require) {
"use strict";

    const FormRenderer = require('web.FormRenderer');
    require('mail/static/src/widgets/form_renderer/form_renderer.js');

    FormRenderer.include({
        _renderNode(node) {
            if (node.tag === 'div' && node.attrs.class === 'oe_chatter') {
                return this._makeChatterContainerTarget();
            }else{
                return this._super.apply(this, arguments);
            }            
        },
    });

});
