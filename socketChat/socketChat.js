// START WRAPPER: The YUI.add wrapper is added by the build system, when you use YUI Builder to build your component from the raw source in this file

YUI.add("socketChat", function(Y) {
//Y.use('widget', 'substitute', 'node');
    /* Any frequently used shortcuts, strings and constants */
    var Lang = Y.Lang;

    /* SocketChat class constructor */
    function SocketChat(config) {
        SocketChat.superclass.constructor.apply(this, arguments);
    }

    /* 
     * Required NAME static field, to identify the Widget class and 
     * used as an event prefix, to generate class names etc. (set to the 
     * class name in camel case). 
     */
    SocketChat.NAME = "socketChat";

    /*
     * The attribute configuration for the widget. This defines the core user facing state of the widget
     */
    SocketChat.ATTRS = {
        id:{
            value: "socketChatContainer",
            writeOnce: true
        },

        chatFieldClass:{
        value:"yui-socketChat-field",
        writeOnce: true
        },

        chatInputClass:{
            value:"yui-socketChat-input",
            writeOnce: true
        },
        chatPlaceholder:{
            value:"Chat here..."
        },

        host:{
            value:{
                address:'http://127.0.0.1',
                port:'3000'
                   },
            getter: "_gettHost"
        },

        attrA : {
            value: "A"                     // The default value for attrA, used if the user does not set a value during construction.

            /*
            , valueFn: "_defAttrAVal"      // Can be used as a substitute for "value", when you need access to "this" to set the default value.
             
            , setter: "_setAttrA"          // Used to normalize attrA's value while during set. Refers to a prototype method, to make customization easier
            , getter: "_getAttrA"          // Used to normalize attrA's value while during get. Refers to a prototype method, to make customization easier
            , validator: "_validateAttrA"  // Used to validate attrA's value before updating it. Refers to a prototype method, to make customization easier

            , readOnly: true               // Cannot be set by the end user. Can be set by the component developer at any time, using _set
            , writeOnce: true              // Can only be set once by the end user (usually during construction). Can be set by the component developer at any time, using _set
            
            , lazyAdd: false               // Add (configure) the attribute during initialization. 
            
                                           // You only need to set lazyAdd to false if your attribute is
                                           // setting some other state in your setter which needs to be set during initialization 
                                           // (not generally recommended - the setter should be used for normalization. 
                                           // You should use listeners to update alternate state). 

            , broadcast: 1                 // Whether the attribute change event should be broadcast or not.
            */
        }
        
        // ... attrB, attrC, attrD ... attribute configurations. 

        // Can also include attributes for the super class if you want to override or add configuration parameters
    };

    /* 
     * The HTML_PARSER static constant is used if the Widget supports progressive enhancement, and is
     * used to populate the configuration for the SocketChat instance from markup already on the page.
     */
    SocketChat.HTML_PARSER = {

        attrA: function (srcNode) {
            // If progressive enhancement is to be supported, return the value of "attrA" based on the contents of the srcNode
        }

    };

    /* Templates for any markup the widget uses. Usually includes {} tokens, which are replaced through Y.substitute */
    SocketChat.CHATFIELD_TEMPLATE = '<div id="{mynodeid}-chatTextField" class="{chatFieldClass}"></div>';
    SocketChat.CHATINPUT_TEMPLATE = '<input id="{mynodeid}"-chatInput" type="text" class="{chatInputClass}" placeholder="{chatPlaceholder}"/>';

    /* SocketChat extends the base Widget class */
    Y.extend(SocketChat, Y.Widget, {

        initializer: function() {
            /*
             * initializer is part of the lifecycle introduced by 
             * the Base class. It is invoked during construction,
             * and can be used to setup instance specific state or publish events which
             * require special configuration (if they don't need custom configuration, 
             * events are published lazily only if there are subscribers).
             *
             * It does not need to invoke the superclass initializer. 
             * init() will call initializer() for all classes in the hierarchy.
             */

         //   _initSocket(this.get('channel', this.get('field'));

           /*  this.publish("myEvent", {
                defaultFn: this._defMyEventFn,
                bubbles:false
             });
             */
        },

        destructor : function() {
            /*
             * destructor is part of the lifecycle introduced by 
             * the Widget class. It is invoked during destruction,
             * and can be used to cleanup instance specific state.
             *
             * Anything under the boundingBox will be cleaned up by the Widget base class
             * We only need to clean up nodes/events attached outside of the bounding Box
             *
             * It does not need to invoke the superclass destructor. 
             * destroy() will call initializer() for all classes in the hierarchy.
             */
        },

        renderUI : function() {
            /*
             * renderUI is part of the lifecycle introduced by the
             * Widget class. Widget's renderer method invokes:
             *
             *     renderUI()
             *     bindUI()
             *     syncUI()
             *
             * renderUI is intended to be used by the Widget subclass
             * to create or insert new elements into the DOM. 
             */

              var contentBox = this.get('contentBox');
              var chatInput = contentBox.one('.'+this.get('chatInputClass'));
              var chatField = contentBox.one('.'+this.get('chatFieldClass'));
              if (!chatInput){
              chatInput = Y.Node.create(Y.substitute(SocketChat.CHATINPUT_TEMPLATE, {mynodeid: this.get("id") + "_chatInput", chatInputClass:this.get('chatInputClass'), chatPlaceholder:this.get('chatPlaceholder') })); 
              contentBox.appendChild(chatInput);
             }
              if (!chatField){
              chatField = Y.Node.create(Y.substitute(SocketChat.CHATFIELD_TEMPLATE, {mynodeid: this.get("id") + "_chatfield", chatFieldClass:this.get('chatFieldClass') })); 
              contentBox.appendChild(chatField);
             }

             this.chatInput = chatInput;
             this.chatField = chatField;

             //create text field, and input field 
//             this._chatContainer.append("<input id="+this.get('id')+"-input class=socketChatInput type=text size=25>");
        },

        bindUI : function() {
            /*
             * bindUI is intended to be used by the Widget subclass 
             * to bind any event listeners which will drive the Widget UI.
             * 
             * It will generally bind event listeners for attribute change
             * events, to update the state of the rendered UI in response 
             * to attribute value changes, and also attach any DOM events,
             * to activate the UI.
             */
            
             // this.after("attrAChange", this._afterAttrAChange);
        },

        syncUI : function() {
            /*
             * syncUI is intended to be used by the Widget subclass to
             * update the UI to reflect the initial state of the widget,
             * after renderUI. From there, the event listeners we bound above
             * will take over.
             */

            // this._uiSetAttrA(this.get("attrA"));
        },

        // Beyond this point is the SocketChat specific application and rendering logic

        /* Attribute state supporting methods (see attribute config above) */
       
        _defAttrAVal : function() {
            // this.get("id") + "foo";
        },

        _setAttrA : function(attrVal, attrName) {
            // return attrVal.toUpperCase();
        },

        _getAttrA : function(attrVal, attrName) {
            // return attrVal.toUpperCase();
        },

        _validateAttrA : function(attrVal, attrName) {
            // return Lang.isString(attrVal);
        },

        /* Listeners, UI update methods */

        _afterAttrAChange : function(e) {
            /* Listens for changes in state, and asks for a UI update (controller). */

            // this._uiSetAttrA(e.newVal);
        },

        _uiSetAttrA : function(val) {
            /* Update the state of attrA in the UI (view) */

            // this._mynode.set("innerHTML", val);
        },

        _defMyEventFn : function(e) {
            // The default behavior for the "myEvent" event.
        },

       _getAttrHost : function _getAttrHost(attrVal, attrName){
                return {
                   address: attrVal.address,
                   port: attrVal.port,
                   wholeAddress: attrVal.address+':'+attrVal.port+'/'
                }
        }/*,

       _initSocket :function _initSocket(channel, field){
               var socket = io.connect(this.get('host').wholeAddress+channel);
               socket.on('news', function (data) {
                   console.log("received data from socket"+data);
                   field.append(data.hello);
                   socket.emit('my other event', { my: 'data' });
                   }, 'enter');
               return socket;
             },

       _initChatInput: function initChatInput(socket, chat){
                  var inputText = Y.one('#hereChatInput');
                  inputText.on('key', function(e){
                      console.log('enter pressed in chat input field'); 
                      chat.append('<p>Me: '+ this.get('value'));

                      socket.emit('chatInput', { my: this.get('value') });
                      inputText.set('value','');
                      }, 'enter');

                  socket.on('chatOutput', function(data){
                      chat.append('<p>Somebody: '+ data.hello+'</p>');
                      });
             }
*/
    });

    Y.namespace("SocketChat").SocketChat = SocketChat;

 }, "3.4.0", {requires:["widget", "substitute", "node"]});
// END WRAPPER
