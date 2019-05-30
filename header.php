<!doctype html>
<html <?php language_attributes(); //html要素のlang属性を出力 ?>>
    <head>
        <meta charset="<?php bloginfo( 'charset' ); //文字エンコーディング情報を出力 ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title><?php wp_title( '|', true, 'right' ); //ページタイトルを出力 ?><?php bloginfo('name'); //サイト名を表示 ?></title>
        <meta name="Description" content="RCU DESIGNは、クライアントの課題・希望に対し、責任を持って成果をだすため最適なデザイン・コンテンツを創造し続ける制作会社です。">
        <meta property="og:title" content="氣功整体にじいろ">
        <meta property="og:description" content="CU DESIGNは、クライアントの課題・希望に対し、責任を持って成果をだすため        最適なデザイン・コンテンツを創造し続ける制作会社です。">
        <meta property="og:image" content="images/common/ogimage.png">
        <meta name="format-derection" content="telephone=no">
        <link rel="apple-touch-icon" href="images/common/apple-touch-icon-180x180.png">
        <link rel="shortcut icon" href="images/common/favicon.ico">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://use.typekit.net/ymc1mmn.css">
        <link rel="stylesheet" type="text/css" href="slick/slick.css" media="screen" />
        <link rel="stylesheet" type="text/css" href="slick/slick-theme.css" media="screen" />
        <link rel="stylesheet" href="<?php echo get_stylesheet_uri(); //使用中テーマのスタイルシートURLを出力 ?>">
        <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); //ピングバックURLを出力 ?>">
        <?php wp_head(); //wp_headはテーマの</head>タグ直前に必ず挿入します ?>
    </head>
    <body <?php body_class(); //bodyタグにページの種類に応じたクラス名を与える ?>>
        <div class="wrapper">
            <header id="banner" class="nijiiro">

                <div id="header">
                    <div class="row"><div class="menu_btn">
				<button class="btn-trigger">
					<span></span>
					<span></span>
					<span></span>
				</button>
					<p class="menu">menu</p>
				</div>
                        <!--navigation-->
                        <nav class="navigation flex-center fadeIn">
                            <h2 class="hide">ナビゲーション</h2>
                            <ul class="nav_list flex flex_heightc">
                                <li class="nav_item nav_item_top"><a href="<?php echo home_url(); //トップページのURLを出力 ?>"><img class="top_logo" src="<?php echo get_template_directory_uri(); ?>/images/common/nijilogo.png" alt="氣功整体にじいろロゴ"></a></li>
                                <li class="nav_item"><a href="<?php echo home_url(); ?>/whats/"><span class="dpb">what's</span>おうち整体</a></li>
                                <li class="nav_item"><a href="#id_courseinfo"><span class="dpb">Course</span>講座案内</a></li>
                                <li class="nav_item"><a href="<?php echo home_url(); ?>/feature/"><span class="dpb">Feature</span>特徴</a></li>
                                <li class="nav_item"><a href="<?php echo home_url(); ?>/about/"><span class="dpb">About</span>氣功整体にじいろ</a></li>
                                <li class="nav_item"><a href="<?php echo home_url(); ?>/Dictionary/"><span class="dpb">Dictionary</span>お悩み解決辞書</a></li>
                                <li class="nav_item"><a href="<?php echo home_url(); ?>/voice/"><span class="dpb">Voice</span>生徒さんの声</a></li>
                                <li class="nav_item"><a href="<?php echo home_url(); ?>/q-a/"><span class="dpb">Q&amp;A</span>よくある質問</a></li>
                                <li class="nav_item"><a href="#id_access"><span class="dpb">Access</span>場所</a></li>
                            </ul>
                        </nav>

                        <div class="sp_logo">
                            <a href="<?php echo home_url(); ?>"><img src="<?php echo get_template_directory_uri(); ?>/images/common/nijilogo.png" alt="氣功整体にじいろ"></a></div>
                        <ul class="nav_list__btn">
                            <li class="nav_btn"><button type="button" onclick="window.open('https://smart.reservestock.jp/inquiry_form/inquiry_form/27943')" class="btn-main"><span class="en dpb">Contact</span>お問い合わせ</button>
                            </li>
                            <li class="nav_btn"><button type="button" onclick="window.open('https://smart.reservestock.jp/event_form/event_calendar/21401')" class="btn-main pink"><span class="en dpb">Entry</span>各講座にお申込み</button></li>
                        </ul><ul class="none fadeIn">
					<li class="nav_btn"><a href="treatment.html" class="btn-main treatment">氣功整体<br>施術</a>
					</li>
					<li class="nav_btn"><button type="button" onclick="window.open('https://smart.reservestock.jp/inquiry_form/inquiry_form/27943')" class="btn-main"><span class="en dpb">Contact</span>お問い合わせ</button>
					</li>
					<li class="nav_btn"><button type="button" onclick="window.open('https://smart.reservestock.jp/event_form/event_calendar/21401')" class="btn-main"><span class="en dpb">Entry</span>講座にお申込み</button></li>
				</ul><!--</nav>-->
                    </div>
                </div>
                <div class="banner-content row">
                    <div class="l_page_title_area">
                        <div class="page_titlebox fadeIn">
                            <div class="page_title">
                                <h1 class="l_page_title">氣功整体にじいろ</h1>

                                <p class="page-summary">子育てママに届けたい<br>今できる今だけの「大切な時間」</p>
                            </div>
                            <div class="page_index">
                                <ul class="col-1">
                                    <li><a href="#index_01">
                                        <div class="flex-left flex_heightc">
                                            No.1<span class="index_text">お悩み解決辞書</span>
                                            <span class="fa fa-angle-down"></span>
                                        </div>
                                        </a></li>
                                    <li><a href="#index_02">
                                        <div class="flex-left flex_heightc">
                                            No.2<span class="index_text">カテゴリー</span>
                                            <span class="fa fa-angle-down"></span>
                                        </div>
                                        </a></li>
                                    <li><a href="#index_03">
                                        <div class="flex-left flex_heightc">
                                            No.3<span class="index_text">氣功整体にじいろの想い</span>
                                            <span class="fa fa-angle-down"></span>
                                        </div>
                                        </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </header>			
