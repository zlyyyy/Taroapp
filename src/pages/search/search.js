import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './search.scss'

export default class Index extends Component {
    config = {
        navigationBarTitleText: '首页'
    }

    render () {
        return (
        <View className='todo'>
            <Text>Hello, World</Text>
        </View>
        )
    }
}


