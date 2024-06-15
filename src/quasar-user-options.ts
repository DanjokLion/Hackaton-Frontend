import { config } from 'process';
import './css/app.scss';
import './css/quasar.variables.scss';
import '@quasar/extras/material-icons/material-icons.css';
import { Notify, Loading } from 'quasar';

export default{
    config: {},
    plugins: {
        Notify,
        Loading
    }
}