const fuseSettingsConfig = {
    layout          : {       
        style : 'layout1',
        config: {
            scroll : 'content',
            navbar : {
                display : true,
                folded  : false                
            },
            toolbar: {
                display : true,               
                position: 'below'
            },
            footer : {
                display : false,
                style   : 'fixed'                
            },           
            mode   : 'fullwidth'
        }
    },
    customScrollbars: true,
    theme           : {
        main   : 'default',
        navbar : 'mainThemeDark',
        toolbar: 'mainThemeLight',
        footer : 'mainThemeDark'
    }
};

export default fuseSettingsConfig;