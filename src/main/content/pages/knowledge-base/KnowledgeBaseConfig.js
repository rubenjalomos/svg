import {FuseLoadable} from '@fuse';

export const KnowledgeBasePageConfig = {
    settings: {
        layout: {
            config: {},
            style: 'layout1'
        }
    },
    routes  : [
        {
            path     : '/pages/knowledge-base',
            component: FuseLoadable({
                loader: () => import('./KnowledgeBasePage')
            })
        }
    ]
};
