/*
人际之间的亲属关系与下列属性相关
1.年龄 定义:自己的年龄为0， 则比自己大的为1， 比自己小的为-1， 未知为100
2.辈分 定义:当前辈分为0， 则比自己大一辈的为1， 比自己小一辈的为-1
3.性别 定义：男为0， 女为1
4.堂表

三种定义以数组的形式呈现[性别， 辈分， 年龄]
*/
const UNKNOW_AGE = 0;
const UNKNOW = "未知";
const RLData = {
  "弟弟": [0, 0, -1],
  "哥哥": [
    0,
    0,
    1
  ],
  "姐姐": [
    1,
    0,
    1
  ],
  "妹妹": [
    1,
    0,
    -1
  ],
  "爸爸": [
    0,
    1,
    1
  ],
  "妈妈": [
    1,
    1,
    1
  ],
  "奶奶": [
    0,
    2,
    1
  ],
  "爷爷": [
    0,
    2,
    1
  ]
}
class RelationUtil {
  getAllKeyTone(){
    return Object.keys(RLData);
  }
  countAge(relativeAge1, relativeAge2) {
    if (relativeAge1 > 0 && relativeAge2 > 0) {
      return 1;
    }
    if (relativeAge1 < 0 && relativeAge2 < 0) {
      return -1;
    }
    return UNKNOW_AGE;
  }
  add(relation1, relation2) {
    let rl1Data = RLData[relation1];
    let rl2Data = RLData[relation2];
    //性别
    let out = [rl2Data[0]];
    //辈分
    out.push(rl1Data[1] + rl2Data[1]);
    //年龄
    out.push(this.countAge(rl1Data[2], rl2Data[2]));
  }
  //通过关键属性得到关系
  dataToRelation(data) {
    for (let key in RLData) {
      if (this.equal(RLData[key], data)) {
        return key;
      }
    }
    return UNKNOW;
  }

  equal(data1, data2) {
    if (data1[0] != data2[0]) {
      return false;
    }

    if (data1[1] != data2[1]) {
      return false;
    }

    if (data1[2] != data2[2]) {
      return false;
    }

    return true;
  }
}
var relationUtil = new RelationUtil();
module.exports = {
  relationUtil
}