// ==UserScript==
// @name           AWS Management Console JP-EC2
// @version        0.91
// @namespace      http://translate.aws-cloud.org/ec2
// @description    Translate to Japanese
// @include        https://console.aws.amazon.com/ec2/*
// ==/UserScript

(function () {
var words = new Array();
words['AWS Management Console']='AWSマネジメントコンソール';
words['Amazon EC2 Console Dashboard']='Amazon EC2 コンソール ダッシュボード';
words['To start using Amazon EC2 you will want to launch a virtual server, known as an Amazon EC2 instance.']='Amazon EC2を利用すると、「EC2インスタンス」と呼ばれる仮想サーバを起動できます。';
words['Note: Your instances will launch in the']='ノート:インスタンスは、次の場所で起動します - ';
words['My Resources']='使用中のリソース';
words['You are using the following Amazon EC2 resources in the']='以下のAmazon EC2リソースを使用中です。';
words['Launch Instance']='インスタンス起動';
words['Getting Started']='ここから開始';
words['Service Health']='サービス状態';
words['Service Status']='サービスステータス';

words['[UNTITLED]']='[タイトル未定]';
words['AMI ID']='AMI ID';
words['Root Device']='ルート デバイス';
words['Manifest']='マニフェスト';
words['Platform']='プラットフォーム';
words['You do not have any Elastic IP addresses allocated.']='割り当て済みのElastic IPがありません。';
words['Click the Allocate New Address button to reserve an Elastic IP address.']='新しいアドレスの割り当てボタンをクリックして、Elastic IPを確保します。';
words['Allocate New Address']='新しいアドレスの割り当て';
words['Address']='アドレス';
words['Instance ID']='インスタンスID';
words['ENI ID']='ENI ID';
words['ENI Owner']='ENI オーナー';
words['Scope']='スコープ';
words['Public DNS']='パブリックDNS';
words['Release Address']='アドレスの解放';
words['Associate Address']='アドレスの関連づけ';
words['Disassociate Address']='アドレスの関連づけの解除';
words['Show/Hide']='表示/非表示';
words['Refresh']='再表示';
words['Help']='ヘルプ';
words['Viewing:']='表示中:';
//words['All Addresses']=
//words['EC2 Addresses']=
//words['Associated']=
//words['Associated to Instance']=
//words['Associated to Network Interface']=
//words['Not associated to an Instance']=
//words['Unassociated']=
words['Scope']='スコープ';
words['Public DNS']='パブリックDNS';
words['No records found.']='レコードがありません。';
words['US East (Virginia)']='バージニア';
words['US West (Oregon)']='オレゴン';
words['US West (N. California)']='カリフォルニア';
words['EU West (Ireland)']= 'アイルランド';
words['Asia Pacific (Singapore)']='シンガポール';
words['Asia Pacific (Tokyo)']='東京';
words['South America (Sao Paulo)']='サンパウロ';
words['Value:']='値:';
words['Time:']='時間:';
words['Instance:']='インスタンス:';

//インスタンス起動
words['You do not have any running instances.']='起動中のインスタンスがありません。';
words['First time using EC2? Check out the']='もし初めてEC2を利用するなら、この資料を参照して下さい:';
words['Click the Launch Instances button to start your own server.']='インスタンス起動ボタンで、サーバを起動します。';

words['Create a New Instance']='新しいインスタンスの作成';
words['Cancel']='キャンセル';
words['Select an option below:']='以下のオプションを選択してください:';
words['Classic Wizard']='クラシックウィザード';
words['Launch with the Classic Wizard']='クラシックウィザードで起動';
words['Launch an On-Demand or Spot instance using the classic wizard with fine-grained control over how it is launched.']='詳細な設定が可能なクラシックウィザードを使用して、オンデマンドやスポートインスタンスを起動します。';
words['Quick Launch Wizard']='クイック起動ウィザード';
words['Launch an On-Demand instance using an editable, default configuration so that you can get started in the cloud as quickly as possible.']='編集可能なデフォルト設定を使用して、オンデマンドインスタンスをクイックに起動します。';
words['Submit Feedback']='フィードバックの送信';
words['Continue']='次へ';
words['Choose an Amazon Machine Image (AMI) from one of the tabbed lists below by clicking its']='Amazonマシンイメージをタブリストから選び、次のボタンをクリックします：';
words['Select']='選択';
words['button.']='ボタン';

//ナビゲーション
words['Navigation'] = 'ナビゲーション';
words['My Instances']='インスタンス一覧';
words['Region:'] = 'リージョン:';
words['EC2 Dashboard'] = 'EC2ダッシュボード';    
words['Scheduled Events'] = 'スケジュール イベント';
words['INSTANCES'] = 'インスタンス';
words['Instances'] = 'インスタンス';
words['Spot Requests'] = 'スポット リクエスト';
words['Reserved Instances'] = 'リザーブド インスタンス';    
words['IMAGES'] = 'マシンイメージ';    
words['Bundle Tasks'] = 'バンドルタスク';    
words['ELASTIC BLOCK STORE'] = 'ブロックストア';
words['Volumes'] = 'EBSボリューム';
words['Snapshots'] = 'スナップショット';
words['NETWORK & SECURITY'] = 'ネットワークとセキュリティ';    
words['Security Groups']='セキュリティ グループ';
words['Elastic IPs']='エラスティックIP';
words['Placement Groups']='プレースメントグループ';
words['Load Balancers']='ロードバランサー(ELB)';
words['Key Pairs']='キーペア';
words['Network Interfaces']='ネットワークインターフェース';


//EC2 pulldown
words['All Instances']='全てのインスタンス';
words['All Instance Types']='全てのインスタンスタイプ';
words['Name']='名前';
words['Instance']='インスタンス';

//EC2 detail
words['No EC2 Instances selected.']='EC2インスタンスが選択されていません。';
//words['Select an instance above']='インスタンスを選択して下さい';
words['running']='実行中';
words['stopped']='停止中';
words['terminated']='終了';
words['pending']='起動中';
words['State']='状態';
words['Status Checks']='ステータスチェック';
words['Key Pair Name']='キーペア名';
words['Virtualization']='仮想化層';
words['Placement Group']='プレースメントグループ';
words['Instance Actions']='アクション';
words['Description']='詳細';
words['Monitoring']='モニタリング';
words['Tags']='タグ';
words['Add tags to your instance to simplify the administration of your EC2 infrastructure.  A form of metadata, tags consist of a case-sensitive key/value pair, are stored in the cloud and are private to your account.  You can create user-friendly names that help you organize, search, and browse your resources.  For example, you could define a tag with key = Name and value = Webserver. You can add up to 10 unique keys to each instance along with an optional value for each key.  For more information, go to']='タグをインスタンスに付与することで、EC2インフラの管理が容易になります。これらのタグは大文字小文字を識別したキーと値のペアとして、お使いのアカウントだけで見える情報としてクラウドに格納されます。例えばキーにName、値にWebserverとしておくと、リソースを検索する際に分かりやすい名前をつけることが出来ます。10のユニークなキーと値を各インスタンスに付与できます。詳細な情報は、EC2ガイド内の';
words['Using Tags']='タグの利用方法';
words['in the EC2 User Guide.']='を参照して下さい。';

words['AMI:']='AMI:';
words['Zone:']='ゾーン:';
words['Security Groups:']='セキュリティグループ:';
words['Type:']='タイプ:';
words['State:']='状態:';
words['Scheduled Events:']='スケジュールイベント:';
words['Owner:']='オーナー:';
words['VPC ID:']='VPC ID:';
words['Subnet ID:']='サブネットID:';
words['Check:']='チェック:';
words['Virtualization:']='仮想化層:';
words['Placement Group:']='プレースメントグループ:';
words['Reservation:']='リザベーション:';
words['RAM Disk ID:']='RAMディスクID:';
words['Platform:']='プラットフォーム:';
words['Name:']='名前:';
words['Kernel ID:']='カーネルID:';
words['Monitoring:']='モニタリング:';
words['AMI Launch Index:']='AMI起動インデックス:';
words['Elastic IP:']='エラスティックIP:';
words['Root Device:']='ルートデバイス:';
words['Root Device Type:']='ルートデバイスタイプ:';
words['Key Pair Name:']='キーペア名:';
words['Tenancy:']='占有:';
words['Lifecycle:']='ライフサイクル:';
words['Block Devices:']='ブロックデバイス:';
words['Network Interfaces:']='ネットワークインターフェース:';
words['Public DNS:']='パブリックDNS:';
words['Private DNS:']='プライベートDNS:';
words['Private IP Address:']='プライベートIPアドレス:';
words['Launch Time:']='起動時間:';
words['State Transition Reason:']='現在の状態:';
words['Termination Protection:']='終了時の保護:';

//EC2 right click menu
words['Instance Management']='インスタンス管理';
words['Connect']='接続';
words['Get System Log']='システムログ取得';
words['Create Image (EBS AMI)']='イメージ作成(EBS AMI)';
words['Add/Edit Tags']='タグ追加/編集';
words['Change Security Groups']='セキュリティグループ変更';
words['Change Source / Dest Check']='送信元/先チェック変更';
words['Launch More Like This']='同様のインスタンスを起動';
words['Disassociate IP Address']='IPアドレスの関連解除';
words['Change Termination Protection']='終了保護の変更';
words['View/Change User Data']='ユーザーデータ確認/変更';
words['Change Instance Type']='インスタンスタイプ変更';
words['Change Shutdown Behavior']='終了時の挙動変更';
words['Attach Network Interface']='ネットワークインターフェース追加';
words['Detach Network Interface']='ネットワークインターフェース除去';
words['Instance Lifecycle']='インスタンスライフサイクル';
words['Terminate']='終了';
words['Reboot']='再起動';
words['Stop']='停止';
words['Start']='起動';
words['CloudWatch Monitoring']='モニタリング設定';
words['Enable Detailed Monitoring']='詳細モニタリング有効化';
words['Disable Detailed Monitoring']='詳細モニタリング無効化';
        

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
