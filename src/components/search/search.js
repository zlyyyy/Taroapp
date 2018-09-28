import Taro, { Component } from '@tarojs/taro'
import { View, Image, Input } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './search.scss'
import searchPng from '../../asset/images/search_icon.png'
import playerPng from '../../asset/images/player.png'

export default class Index extends Component {
    render () {
        return (
            <View className='search flex-wrp'>
                <View className='search-left flex-item'>
                    <View className='flex-wrp'>
                        <View className='flex1'><Image src={searchPng}></Image></View>
                        <View className='flex20'><Input type='text' placeholder={'搜索音乐'} placeholderClass='search-placeholder' /></View>
                    </View>
                </View>
                <View className='search-right flex-item'>
                    <Image onClick={this.updateList} src={playerPng}></Image>
                </View>
            </View>
        )
    }
}


