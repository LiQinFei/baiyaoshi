/**
 * Created by Administrator on 2017/7/15.
 */


var toast = new auiToast({})
var dialog = new auiDialog({})
const IS_DEBUG = true; //如果是测试环境就是true，如果是生产环境就是false
const commonUrl = IS_DEBUG ? '' : 'http://www.xzljszm.top';
const api = !IS_DEBUG ? '' : '/api';
