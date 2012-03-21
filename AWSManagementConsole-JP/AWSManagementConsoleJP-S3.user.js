// ==UserScript==
// @name           AWS Management Console S3 ja-JP
// @version        0.91
// @namespace      http://translate.aws-cloud.org/s3
// @description    Translate to Japanese
// @include        https://s3-console-us-standard.console.aws.amazon.com/*
// ==/UserScript

(function () {
var words = new Array();
//
words['Buckets']='バケット';
words['Actions']='バケット';
words['Create Bucket']='バケットの作成';
words['Select one of your buckets to the left to look at the objects it contains,']='オブジェクトを見るため、バケットを左から選択します。';
words['or to upload objects into it.']='またはオブジェクトをアップロードします。';
words['Cancel']='キャンセル';
words['Create a Bucket - Select a Bucket Name and Region']='バケットの生成 - バケット名とリージョンを選んでください';
words['A bucket is a container for objects stored in Amazon S3. When creating a bucket, you can choose a Region to optimize for latency, minimize costs, or address regulatory requirements. For more information regarding bucket naming conventions, please visit the']='バケットはオブジェクトをAmazon S3内に保存するための容器です。バケットを生成すると、レイテンシの最適化、コストの最小化、保存する地域の要件などに合わせてリージョンを選択できます。バケット名などの詳細については、以下のサイトを参照ください:';
words['Amazon S3 documentation.']='Amazon S3ドキュメント';
words['Bucket Name:']='バケット';
words['Region:']='リージョン:';
words['US Standard']='US標準';
words['Oregon']='オレゴン';
words['Northern California']='北カリフォルニア';
words['Ireland']= 'アイルランド';
words['Singapore']='シンガポール';
words['Tokyo']='東京';
words['Sao Paulo']='サンパウロ';





//フッター
words['Feedback']='フィードバック';
words['Support']='サポート';
words['Privacy Policy']='プライベートポリシー';
words['Terms of Use']='利用条件';

    var translate = function(node){
        var candidates = document.evaluate('.//text()[not(parent::style)]', node, null, 6, null);
        var i = 0;
        var txt = '';
        var translated = '';
        var v = '<div>';
        for (i=0; i<candidates.snapshotLength; i++) {
            txt = candidates.snapshotItem(i).nodeValue.trim();
            if(txt.length > 0){
	           // v = v +  "words['" + txt +"']=" +'<BR>';
	            translated = words[txt];
	            if(translated != null){
	              candidates.snapshotItem(i).nodeValue = translated;
	            }
            }
        }
       // alert(v);
        candidates = document.evaluate('.//input/@value', node, null, 6, null);
        for (i=0; i<candidates.snapshotLength; i++) {
            txt = candidates.snapshotItem(i).nodeValue.trim();
            if(txt.length > 0){
	            translated = words[txt];
	            if(translated != null){
	              candidates.snapshotItem(i).nodeValue = translated;
	            }
            }
        }
    };
    translate(document);
    document.addEventListener('DOMNodeInserted', function(e){ translate(e.target); }, false);
    document.addEventListener('DOMCharacterDataModified', function(e){ translate(e.target); }, false);
    document.addEventListener('DOMAttrModified', function(e){ translate(e.target); }, false);
})();
