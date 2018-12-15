import {FuseLoadable} from '@fuse';

export const FaqPageConfig = {
    settings: {
        layout: {
            config: {},
            style:'layout1'
        }
    },
    routes  : [
        {
            path     : '/pages/faq',
            component: FuseLoadable({
                loader: () => import('./FaqPage')
            })
        }
    ]
};
