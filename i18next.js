/**
* Creation Date: 2017-07-26
* Created By: totihuang
* Last Modified: 2017-07-27
* Last Modified By: totihuang
* Description:
* 1.本翻译库使用i18next作为基础，见https://www.i18next.com/
* 2.i18next的库存在问题，如遇不通情况，请降级处理
* 3.引用库之前，请先到requirejs_config.js配置路径
*/

    var $ = require('jquery');
    var i18next = require('jquery-i18next/i18next');
    var lngDetector = require('jquery-i18next/i18nextBrowserLanguageDetector');
    var lang = require('lang');

    /**
     * 语言识别配置，api详见https://github.com/i18next/i18next-browser-languageDetector
     */
    var detection = {
        //查找的顺序，依次是后端返回的数据，cookie，本地缓存，浏览器，和开发者文档（当都识别不出的时候，默认开发者文档语言）
        order: ['navigator'],

        // 对应查询的key的名字
        lookupQuerystring: 'lng',
        lookupCookie: 'i18next',
        lookupLocalStorage: 'i18nextLng',

        // 缓存选择
        caches: [''],
        excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

        // 期限和域
        cookieMinutes: 10,
        cookieDomain: 'myDomain',

        // 查询dom文档的lang语言
        htmlTag: document.documentElement
    };
 
    /**
     * 初始化i18next
     * @api: 
     * 1.use--相当于inport／require，引入插件
     * 2.init(opts)--设置参数，详情见https://www.i18next.com/configuration-options.html
     */
    i18next
        .use(lngDetector)
        .init({
            fallbackLng: 'zh',
            lowerCaseLng: true,
            detection: detection,
            debug: true,
            resources: lang,
            load: 'all'
        });

    /**
     * 返回外部方法
     * @note: 
     * 1.return回去的方法相当于闭包，已经引用过的包，不需要在外部再引用
     * 2.第三方库存在问题，函数降级处理，排查ing
     */
    var events = {
        /**
         * 针对上下页提交按钮的翻译
         */
        translateButtons: function () {

            var buttons = [
                //下一页
                {
                    key: $('.survey_nextpage'),
                    str: 'next'
                },
                //上一页
                {
                    key: $('.survey_prevpage'),
                    str: 'prev'
                },
                //提交
                {
                    key: $('.survey_submit'),
                    str: 'submit'
                }
            ]

            /**
             * 统一处理函数
             * @param：按钮数组对象
             * @note: 链式调用，统一修改
            */
            function buttonHandler(obj) {
                for (var i = 0; i < obj.length; i++) {
                    obj[i].key
                        .html(i18next.t(obj[i].str))
                        .attr('title', i18next.t(obj[i].str))
                        .attr('aria-label', i18next.t(obj[i].str))
                }
            }

            buttonHandler(buttons);
            alert(i18next.language);
            alert(i18next.languages);
        },
        /**
         * 单独翻译函数
         * @param：str为一个字符串
         * @note: 有时候有小地方需要翻译，难免封装所有元素。故写一个单独调用翻译函数。
         */
        translate: function (str) {
            return i18next.t(str);
        }
    };

    var str=events.translate('comfirm');
    var app=document.getElementById('app');
    app.innerHTML(str);
