module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    response = {"results": [
        { "time": "13:00-13:40", "ID": "Keynote", "session_name": "Develop our future vision", "company": "Microsoft", "name": "井上 章", "description": "", "": "" },
        { "time": "13:45-14:25", "ID": "BS6", "session_name": "マイクロソフトの GitHub との取り組み", "company": "GitHub / Microsoft", "name": "山銅章太・横井 羽衣子", "description": "マイクロソフトは 2018 年の GitHub との提携以降、オープンソース開発への取り組みを強化し\nています。本セッションでは、マイクロソフトが GitHub と目指す DevOps カルチャーについてお伝\nえします。", "": "" },
        { "time": "14:30-15:10", "ID": "BS7", "session_name": "GitHub をフル活用した開発", "company": "GitHub", "name": "田中 裕一", "description": "近年 GitHub がカバーする領域は広がっており、新しいプロダクトや機能のアイデアを思いついて\nからそれをソフトウェアとしてユーザーに届けるまでをすべて GitHub 上で行うことで、高速な開発\nサイクルを実現できるようになっています。本セッションでは、そういった GitHub を使った開発サイ\nクル全体を、最新の機能のデモを織り交ぜながらご紹介します。", "": "" },
        { "time": "15:15-15:55", "ID": "BS8", "session_name": "GitHub Advanced Security で実践できる DevSecOps 対策", "company": "GitHub", "name": "Daniel Cho", "description": "昨今のセキュリティインシデントのほとんどはインフラを標的にするのではなく、アプリケーションの脆\n弱性に起因しております。その中で DevSecOps という単語が注目を浴びております。本セッシ\nョンでは GitHub が提供している GitHub Advanced Security (GHAS)を活用して今すぐ実践\nできる DevSecOps の機能をご紹介いたします。また、GHAS のコードスキャニング機能と同胞さ\nれている CodeQL についても解説いたします。", "": "" },
        { "time": "16:00-16:40", "ID": "BS9", "session_name": "モダン & クラウドネイティブなソフトウエア開発はじめよう ~ Azure DevOps & GitHub を使っ\nたアプリ開発 DevOps 101", "company": "Microsoft", "name": "大森 彩子", "description": "クラウドサービスを上手に利用してソリューションを構築する、または、開発環境やソース、プロセス\nの管理もクラウド化している \"クラウドネイティブ\" な時代。「まだこれから」という方でも (ひとりでも\n少人数でも) はじめられる、アプリ開発＆プロセスの実際をデモを交えてご紹介いたします。\nソースコード管理や、テストやデプロイといったプロセス自動化、そして開発サイクルを短期化してデ\nリバリー頻度を高める CI/CD (継続的デリバリー、継続的インテグレーション)… こんなキーワードが\n気になっていた (まだできていない、やっていない) という方、ぜひこの機会にイマドキのアプリ開発\nをスタートしてください。", "": "" },
        { "time": "16:45-17:25", "ID": "BS10", "session_name": "Microsoft と GitHub の開発エコシステムで、開発にドライブをかけよう！", "company": "", "name": "服部 佑樹", "description": "本セッションではアプリケーション開発者の皆様が、Microsoft と GitHub のエコシステムを使っ て開発を効率化する方法についてお伝えします。 クラウドが始まってから 10 年あまり、IaaS や PaaS の技術は進化を遂げ、サービスの開発はとて も楽になりました。 今までインフラとアプリは近いようで離れた存在でしたが、クラウドの進化で確実にその距離が近 づいています。 このことはアプリケーションエンジニアが、さらに多くのことを実現できることを意味します。 CI/CD パイプラインを提供する GitHub Actions や、フロントエンドアプリをホスティングする Azure Static Web Apps、軽量な Serverless 実行環境を提供する Azure Functions など、 拡がるアプリケーション開発の世界とクラウドの連携をぜひご体験ください。", "": "" }
    ]}
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: response
    };
}