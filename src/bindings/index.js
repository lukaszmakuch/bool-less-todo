import handler0 from './main/index.js';
import handler1 from './main/Items/child/DoneItem/index.js';
import handler2 from './main/Items/child/index.js';
import handler3 from './main/Items/child/UndoneItem/index.js';
import handler4 from './main/Items/index.js';
import handler5 from './main/Navigation/index.js';
import handler6 from './main/Navigation/View/All/index.js';
import handler7 from './main/Navigation/View/Done/index.js';
import handler8 from './main/Navigation/View/index.js';
import handler9 from './main/Navigation/View/Undone/index.js';
import handler10 from './main/NewItemForm/index.js';
import handler11 from './main/NewItemForm/View/index.js';
export default opts => ({
    'main': handler0(opts),
    'main:Items:child:DoneItem': handler1(opts),
    'main:Items:child': handler2(opts),
    'main:Items:child:UndoneItem': handler3(opts),
    'main:Items': handler4(opts),
    'main:Navigation': handler5(opts),
    'main:Navigation:View:All': handler6(opts),
    'main:Navigation:View:Done': handler7(opts),
    'main:Navigation:View': handler8(opts),
    'main:Navigation:View:Undone': handler9(opts),
    'main:NewItemForm': handler10(opts),
    'main:NewItemForm:View': handler11(opts)
});