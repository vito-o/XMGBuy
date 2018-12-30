import React from 'react'
import Home from '../Component/Home/XMGHome'
import Shop from '../Component/Shop/XMGShop'
import Mine from '../Component/Mine/XMGMine'
import More from '../Component/More/XMGMore'

export let tabItems = [
    {
        title:'首页',
        selectedTab:'home',
        iconName:'icon_tabbar_homepage',
        selectedIconName:'icon_tabbar_homepage_selected',
        component:(navigation)=><Home navigation={navigation}/>
    },
    {
        title:'商家',
        selectedTab:'shop',
        iconName:'icon_tabbar_merchant_normal',
        selectedIconName:'icon_tabbar_merchant_selected',
        component:(navigation)=><Shop navigation={navigation}/>
    },
    {
        title:'我的',
        selectedTab:'mine',
        iconName:'icon_tabbar_mine',
        selectedIconName:'icon_tabbar_mine_selected',
        component:(navigation)=><Mine navigation={navigation}/>
    },
    {
        title:'更多',
        selectedTab:'more',
        iconName:'icon_tabbar_misc',
        selectedIconName:'icon_tabbar_misc_selected',
        component:(navigation)=><More navigation={navigation}/>
    },
]