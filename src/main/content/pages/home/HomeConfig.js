import {FuseLoadable} from '@fuse';
import {authRoles} from 'auth';

export const HomeConfig = {
    settings: {
        layout: {
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
            path     : '/home',
            component: FuseLoadable({
                loader: () => import('./Home')
            })
        }
    ]
};
