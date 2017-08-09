"use strict";
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
exports.__esModule = true;
var jquery_1 = require("jquery");
var i18next_1 = require("i18next");
var i18next_browser_languagedetector_1 = require("i18next-browser-languagedetector");
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
    excludeCacheFor: ['cimode'],
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
i18next_1["default"]
    .use(i18next_browser_languagedetector_1["default"])
    .init({
    fallbackLng: 'zh',
    lowerCaseLng: true,
    detection: detection,
    debug: true,
    resources: {
        "zh": {
            translation: {
                "start": "开始填写",
                "choose": "请选择",
                "next": "下一页",
                "prev": "上一页",
                "finish": "您已经完成",
                "submit": "提交",
                "close": "关闭",
                "comfirm": "确定"
            }
        },
        "zh_tw": {
            translation: {
                "start": "開始填寫",
                "choose": "請選擇",
                "next": "下一頁",
                "prev": "上一頁",
                "finish": "您已經完成",
                "submit": "提交",
                "close": "關閉",
                "comfirm": "確定"
                // "tip_required": "這道問題必須回答哦",
                // "tip_submitted": "問卷已經提交！",
                // "tip_submitting": "提交中...",
                // "tip_error": "出現錯誤，請重試！",
                // "tip_refer": "此題選項來源於第 {0} 題的選中項，請先填寫第 {1} 題",
                // "tip_maxlength": "最多選 {0} 項",
                // "tip_min_char": "最少輸入 {0} 個字符",
                // "tip_max_char": "最多輸入 {0} 個字符",
                // "tip_min_value": "輸入值不能小於 {0}",
                // "tip_max_value": "輸入值不能大於 {0}",
                // "tip_num": "請輸入數字，例如：123",
                // "tip_int": "請輸入整數",
                // "tip_date": "請輸入標準日期格式，例如:1987-02-13",
                // "tip_email": "請輸入電子郵箱，例如：exp@qq.com",
                // "tip_zh": "請輸入中文",
                // "tip_en": "請輸入英文",
                // "tip_url": "請輸入網址，例如：http://exp.qq.com",
                // "tip_id": "請輸入身份證號碼",
                // "tip_qq": "請輸入QQ號碼",
                // "tip_mobile": "請輸入手機號碼",
                // "tip_phone": "請輸入電話號碼",
                // "tip_code": "請輸入郵政編碼"
            }
        },
        "zh_hk": {
            translation: {
                "start": "開始填寫",
                "choose": "請選擇",
                "next": "下一頁",
                "prev": "上一頁",
                "finish": "您已經完成",
                "submit": "提交",
                "close": "關閉",
                "comfirm": "確定"
            }
        },
        "zh-hk": {
            translation: {
                "start": "開始填寫",
                "choose": "請選擇",
                "next": "下一頁",
                "prev": "上一頁",
                "finish": "您已經完成",
                "submit": "提交",
                "close": "關閉",
                "comfirm": "確定"
            }
        },
        "zh-tw": {
            translation: {
                "start": "開始填寫",
                "choose": "請選擇",
                "next": "下一頁",
                "prev": "上一頁",
                "finish": "您已經完成",
                "submit": "提交",
                "close": "關閉",
                "comfirm": "確定"
            }
        },
        "en": {
            translation: {
                "start": "Start",
                "choose": "Please choose",
                "next": "next",
                "prev": "previous",
                "finish": "Congratulations on completing the questionnaire",
                "submit": "Submit",
                "close": "Close",
                "comfirm": "comfirm"
                // "tip_required": "This question requires an answer",
                // "tip_submitted": "Thanks for completing this survey.Your questionnaire has been submitted！",
                // "tip_submitting": "Submitting...",
                // "tip_error": "An error has occurred, please try again.",
                // "tip_refer": "Please select {1} first. (This option is a sub-option of {0})",
                // "tip_maxlength": "You can select up to {0} item(s)",
                // "tip_min_char": "At least {0} characters",
                // "tip_max_char": "No more than {0} characters",
                // "tip_min_value": "Please enter a value that is at least {0} characters",
                // "tip_max_value": "Please enter a value that is less than {0} characters",
                // "tip_num": "Please enter number(s).Example: 123",
                // "tip_int": "Please enter an integer",
                // "tip_date": "Please enter the date (format: YYYY-MM-DD)",
                // "tip_email": "Please enter your email address.Example: exp@qq.com",
                // "tip_zh": "Please enter Chinese",
                // "tip_en": "Please enter English",
                // "tip_url": "Please enter the URL. Example: http://exp.qq.com",
                // "tip_id": "Please enter the ID number",
                // "tip_qq": "Please enter your QQ number",
                // "tip_mobile": "Please enter your mobile number",
                // "tip_phone": "Please enter your phone number",
                // "tip_code": "Please enter your zip code"
            }
        },
        "fr": {
            translation: {
                "start": "commencer",
                "choose": "choisir s'il vous plaît",
                "next": "suivant",
                "prev": "précédent",
                "finish": "terminé",
                "submit": "soummetre",
                "close": "fermer",
                "comfirm": "déterminer"
                //     "tip_required": "question obligatoire",
                //     "tip_submitted": "question enregistré！",
                //     "tip_submitting": "en train de traiter...",
                //     "tip_error": "erreur, reessayer s'il vous plaît！",
                //     "tip_refer": "Cette option de la question  vient des options de la question {0},  remplir  d'abord la question {1} s'il vous plaǐt",
                //     "tip_maxlength": "Maximum choisir {0}",
                //     "tip_min_char": "Minimum de caractères d'entrée {0}",
                //     "tip_max_char": "Maximum de caractères d'entrée {0}",
                //     "tip_min_value": "donnée d'entrée ne peut pas être inférieure à {0}",
                //     "tip_max_value": "donnée d'entrée ne peut pas être supérieur à {0}",
                //     "tip_num": "entrez le numéro S'il vous plaǐt, Px:123",
                //     "tip_int": "entrez un entier S'il vous plaǐt",
                //     "tip_date": "entrez le format de date standard S'il vous plaǐt,Px:987-02-13",
                //     "tip_email": "entrez email S'il vous plaǐt, Px:exp@qq.com",
                //     "tip_zh": "entrez les chinois S'il vous plaǐt",
                //     "tip_en": "entrez les anglais S'il vous plaǐt",
                //     "tip_url": "entrez l'URL S'il vous plaǐt, px:http://exp.qq.com",
                //     "tip_id": "entrez le numéro d'identification S'il vous plaǐt",
                //     "tip_qq": "entrez le numéro de QQ S'il vous plaǐt",
                //     "tip_mobile": "entrez le numéro de téléphone mobile S'il vous plaǐt",
                //     "tip_phone": "entrez le numéro de téléphone S'il vous plaǐt",
                //     "tip_code": "entrez le code postal S'il vous plaǐt"
            }
        },
        "de": {
            translation: {
                "start": "Start",
                "choose": "Bitte wählen Sie",
                "next": "nächste",
                "prev": "zurük",
                "finish": "End",
                "submit": "Vorlegen",
                "close": "Schließen",
                "comfirm": "bestimmen"
                // "tip_required": "Pflichtfeld",
                // "tip_submitted": "Der Fragebogen ist vorgelegt.",
                // "tip_submitting": "Vorlegen...",
                // "tip_error": "Falsch, bitte versuchen Sie noch einmal！",
                // "tip_refer": "Die Wahlen sind aus die ausgewählte eines der {0} Frage, bitte füllen Sie zuerst die {0}. Frage.",
                // "tip_maxlength": "höchst zur {0} Wahlen",
                // "tip_min_char": "minderstens zur {0} Zeichen",
                // "tip_max_char": "höchst zur {0} Zeichen",
                // "tip_min_value": "{0} und kleiner Nummern verboten",
                // "tip_max_value": "{0} und größer Nummern verboten",
                // "tip_num": "Bitte geben eine Zahl ein, Z.B 123",
                // "tip_int": "Bitte geben eine Ganzzahl ein",
                // "tip_date": "Bitte geben Ihren Geburtstag ein(Datum/Monat/Jahr). Z.B. 13-02-1987",
                // "tip_email": "Bitte geben Ihre Email ein, Z.B. exp@qq.com",
                // "tip_zh": "Bitte geben Chinese ein",
                // "tip_en": "Bitte geben Englisch ein",
                // "tip_url": "Bitte geben die Netzadresse ein, Z.B. http://exp.qq.com",
                // "tip_id": "Bitte geben Ihre Personalausweisnummer ein",
                // "tip_qq": "Bitte geben Ihre QQnummer ein",
                // "tip_mobile": "Bitte geben Ihre Handynummer ein",
                // "tip_phone": "Bitte geben Ihre Telefonnummer ein",
                // "tip_code": "Bitte geben Ihre Postleitzahl ein"
            }
        },
        "kor": {
            translation: {
                "start": "시작",
                "choose": "선택하세요",
                "next": "다음",
                "prev": "앞",
                "finish": "당신은 이미 완료했어요",
                "submit": "제출/제기",
                "close": "닫기",
                "comfirm": "결정"
                // "tip_required": "이 질문은 꼭 답변해야 돼요",
                // "tip_submitted": "설문 조사가 제출되었습니다！",
                // "tip_submitting": "제출중/제기중",
                // "tip_error": "오류가 생겼으니 다시 선택해 주 십시오！",
                // "tip_refer": "우선, {0} 를 고르세요 (이 옵션은 {0}의 보조 옵션입니다)",
                // "tip_maxlength": "물품을 {0} 개 까지 고를수 있습니다",
                // "tip_min_char": "최소 {0}글자 이상이여야 합니다",
                // "tip_max_char": "최대 글자수는 {0} 입니다",
                // "tip_min_value": "입력 수치는 {0}보다 크거나 같아야 한다.",
                // "tip_max_value": "입력 수치는 {0}보다 작거나 같아야 한다",
                // "tip_num": "번호를 입력해주세요 (예:123)",
                // "tip_int": "정상수를 입력해 주세요",
                // "tip_date": "날짜를 입력해 주세요 (형식: YYYY-MM-DD)",
                // "tip_email": "날짜를 입력해 주세요 (형식: YYYY/MM/DD)",
                // "tip_zh": "",
                // "tip_en": "영어를 입력해 주세요",
                // "tip_url": "url 을 입력해 주세요 (예: http://exp.qq.com)",
                // "tip_id": "",
                // "tip_qq": "",
                // "tip_mobile": "핸드폰 번호를 입력해 주세요",
                // "tip_phone": "집전화 번호를 입력해 주세요",
                // "tip_code": "우편번호를 입력해주세요"
            }
        },
        "ko": {
            translation: {
                "start": "시작",
                "choose": "선택하세요",
                "next": "다음",
                "prev": "앞",
                "finish": "당신은 이미 완료했어요",
                "submit": "제출/제기",
                "close": "닫기",
                "comfirm": "결정"
            }
        },
        "kr": {
            translation: {
                "start": "시작",
                "choose": "선택하세요",
                "next": "다음",
                "prev": "앞",
                "finish": "당신은 이미 완료했어요",
                "submit": "제출/제기",
                "close": "닫기",
                "comfirm": "결정"
            }
        },
        "ja": {
            translation: {
                "start": "スタート",
                "choose": "選択してください",
                "next": "次へ",
                "prev": "前へ",
                "finish": "これでアンケートは完了しました",
                "submit": "提出する",
                "close": "閉じる",
                "comfirm": "定めます"
                // "tip_required": "この質問には必須問題です",
                // "tip_submitted": "アンケートが送信されました！",
                // "tip_submitting": "送信中",
                // "tip_error": "エラーが発生し、もう一度試してください！",
                // "tip_refer": "この問題の選択肢が第ｘ問の選択した項目から来ていますので、第ｘ問を先にお答えください。",
                // "tip_maxlength": "最大{0}項目を選択可能です。",
                // "tip_min_char": "最少{0}文字を入力してください。",
                // "tip_max_char": "最大{0}文字を入力してください。",
                // "tip_min_value": "{0}以上の値を入力してください。",
                // "tip_max_value": "{0}以下の値を入力してください。",
                // "tip_num": "数字を入力してください。例：123",
                // "tip_int": "整数を入力してください。",
                // "tip_date": "日付を入力してください。例：1987-02-13",
                // "tip_email": "メールアドレスを入力してください。例：exp@qq.com",
                // "tip_zh": "",
                // "tip_en": "英字を入力してください。",
                // "tip_url": "URLを入力してください。例：http://exp.qq.com'",
                // "tip_id": "",
                // "tip_qq": "",
                // "tip_mobile": "携帯番号を入力してください。",
                // "tip_phone": "電話番号を入力してください。",
                // "tip_code": "郵便番号を入力してください。"
            }
        }
    },
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
                key: jquery_1["default"]('.survey_nextpage'),
                str: 'next'
            },
            //上一页
            {
                key: jquery_1["default"]('.survey_prevpage'),
                str: 'prev'
            },
            //提交
            {
                key: jquery_1["default"]('.survey_submit'),
                str: 'submit'
            }
        ];
        /**
         * 统一处理函数
         * @param：按钮数组对象
         * @note: 链式调用，统一修改
        */
        function buttonHandler(obj) {
            for (var i = 0; i < obj.length; i++) {
                obj[i].key
                    .html(i18next_1["default"].t(obj[i].str))
                    .attr('title', i18next_1["default"].t(obj[i].str))
                    .attr('aria-label', i18next_1["default"].t(obj[i].str));
            }
        }
        buttonHandler(buttons);
        alert(i18next_1["default"].language);
        alert(i18next_1["default"].languages);
    },
    /**
     * 单独翻译函数
     * @param：str为一个字符串
     * @note: 有时候有小地方需要翻译，难免封装所有元素。故写一个单独调用翻译函数。
     */
    translate: function (str) {
        return i18next_1["default"].t(str);
    }
};
var str = events.translate('comfirm');
var app = document.getElementById('app');
app.innerHTML(str);
