import { request } from './request'

export function getDetail(iid) {
    return request({
        url: '/api/v1/detail',
        params: { iid }
    })
}

export class getGoods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.newPrice = itemInfo.newPrice
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.realPrice = itemInfo.lowNowPrice
        this.columns = columns
        this.services = services
    }

}

export function getRecommend() {
    return request({
        url: '/api/v1/recommend'
    })
}


export class getDetailGoods {
    constructor(info, rule) {
        this.image = info.images ? info.images[0] : '';
        this.infos = info.set;
        this.sizes = rule.tables;
    }
}