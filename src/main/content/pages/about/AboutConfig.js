import {FuseLoadable} from '@fuse';
import {authRoles} from 'auth';

export const AboutConfig = {
    settings: {
        layout: {
            style:'layout2',
            config: {
                navbar        : {
                    display: true
                },
                toolbar       : {
                    display: true
                },
                footer        : {
                    display: false
                },
                leftSidePanel : {
                    display: false
                },
                rightSidePanel: {
                    display: false                    
                }
            }
        }
    },
    routes  : [
        {
            path     : '/about',
            component: FuseLoadable({
                loader: () => import('./About')
            })
        }
    ]
};
