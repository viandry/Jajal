Ext.create('Ext.Container', {
    requires: [
        'Ext.carousel.Carousel',
        'Ext.Img'
    ],
    
    fullscreen: true,
    layout: 'fit',

    items: [{
            xtype: 'panel',            
            items:[{
                    xtype: 'button'
            }]
        },{
            xtype: 'carousel',
            defaults: {
                styleHtmlContent: true,
                direction: 'horizontal',
                directionLock: true,
                layout: 'fit'
            },
            items: [{
                    html : 'Item 1',
                    //style: 'background-color: #5E99CC',
                    xtype: 'image',
                    cls: 'my-carousel-item-img',
                    src: 'resources/photos/food/1.jpg'
                },{
                    html : 'Item 2',
                    //style: 'background-color: #759E60'
                },{
                    html : 'Item 3'
            }]
    }]
});