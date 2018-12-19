import {FuseLoadable} from '@fuse';
import {authRoles} from 'auth';
import auth0Service from 'auth0Service';

export const ContactConfig = {
    settings: {
        layout: {
            style: 'layout2',
            config: {
                navbar        : {
                    display: true
                },
                toolbar: {
                    display : false,               
                    position: 'below'
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
            path     : '/contact',
            component: FuseLoadable({
                loader: () => import('./Contact')
            })
        }
    ]
};
