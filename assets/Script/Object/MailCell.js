var PopupMail = require('PopupMail');
cc.Class({
    extends: require('viewCell'),

    properties: {

        lbl_title: cc.RichText,
        lbl_sender: cc.Label,
        btn_delete: cc.Button,
        mailId: -1,
        index: 0
    },


    init: function (index, data, reload, group) {
        if(data !== null){
            var obj = data.array[index];

            this.lbl_title.string = obj.mail_title;
            this.lbl_sender.string = obj.mail_sender;

            this.mailId = obj.mail_id;

            this.index = index;

            this.btn_delete.node.tag = index;

        } else {
            this.node.active = false;
        }

    },

    deleteEvent: function (e) {

        var tag = e.target._tag;

        PopupMail.instance.deleteMail(tag);

    },

    clicked: function (index) {
        var mailId = this.mailId;
        var index = this.index;
        PopupMail.instance.readMail(mailId, index);

    }


});
