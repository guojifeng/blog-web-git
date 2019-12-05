import Vue from 'vue'
import { Button } from 'element-ui'
import {Form,FormItem} from 'element-ui'
import {Input} from 'element-ui'
import {Message} from 'element-ui'
import { Menu} from 'element-ui'
import { MenuItem} from 'element-ui'
import {Submenu} from 'element-ui'
import {Pagination} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Pagination)
Vue.prototype.$message=Message
