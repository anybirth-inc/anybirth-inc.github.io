<?php

header("Content-Type: application/json; charset=UTF-8");

if( $_SERVER['REQUEST_METHOD'] != 'POST' ) {
    exit;
}

foreach( $_POST as $key => $value ) {
    $_POST[$key] = htmlspecialchars($value);
}

$result = [
    'status' => true,
    'contents' => [],
    'error' => [],
    'mes' => ''
];

$req_input = [
    'name' => 'お名前',
    'kana' => 'ふりがな',
    'zip' => '郵便番号',
    'address1' => '県市区町村・丁目',
    'address2' => '番地',
    'address3' => '建物名・部屋番号',
    'email' => 'メールアドレス',
    'tel' => '電話番号',
    'payment' => '支払い方法',
    'agree' => 'プライバシーポリシーの同意',
];

foreach( $req_input as $key => $value ) {
    switch( $key ) {
        case 'address3';
            break;
        default:
            if( array_key_exists($key, $_POST) == false || empty($_POST[$key]) ) {
                $result['status'] = false;
                array_push($result['error'], $key);
            }
            break;
    }
}

if( $result['status'] == false ) {
    $result['mes'] .= 'は必須項目です';
    echo json_encode($result);
    exit;
}

//メール送信処理
mb_language("Japanese");
mb_internal_encoding("UTF-8");

if( !empty($_POST['email']) ) {
    $subject = "ご注文有り難うございます。";
    $body = $_POST['name']."さま\n\n";
    $body .= "ご注文有り難うございます。\n";
    $body .= "担当にて送付内容を確認し、注文確認のご連絡をさせていただきます。\n\n";
    $body .= "決済情報等も合わせて送付させていただきますので、\n";
    $body .= "ご確認忘れのないようご注意ください。\n\n";
    $body .= "----------\n\n";
    $body .= "注文内容\n\n";
    $body .= "お名前：".$_POST['name']."\n";
    $body .= "ふりがな：".$_POST['kana']."\n";
    $body .= "郵便番号：".$_POST['zip']."\n";
    $body .= "県市区町・丁目：".$_POST['address1']."\n";
    $body .= "番地：".$_POST['address2']."\n";
    $body .= "建物名・部屋番号：".$_POST['address3']."\n";
    $body .= "メールアドレス：".$_POST['email']."\n";
    $body .= "電話番号：".$_POST['tel']."\n";
    $body .= "支払い方法：".$_POST['payment']."\n\n";
    $body .= "----------\n\n";
    $headers = 'From: '.mb_encode_mimeheader("フードロスジャパン").'<contact@exness.co.jp>';

    $send_flag = mb_send_mail(
        $_POST['email'],
        $subject,
        $body,
        $headers
    );
}

$subject = '野菜の注文がありました。';
$body = "----------\n\n";
$body .= "注文内容\n\n";
$body .= "お名前：".$_POST['name']."\n";
$body .= "ふりがな：".$_POST['kana']."\n";
$body .= "郵便番号：".$_POST['zip']."\n";
$body .= "県市区町・丁目：".$_POST['address1']."\n";
$body .= "番地：".$_POST['address2']."\n";
$body .= "建物名・部屋番号：".$_POST['address3']."\n";
$body .= "メールアドレス：".$_POST['email']."\n";
$body .= "電話番号：".$_POST['tel']."\n";
$body .= "支払い方法：".$_POST['payment']."\n\n";
$body .= "----------\n\n";
$headers = 'From: '.mb_encode_mimeheader("注文フォーム").'<contact@exness.co.jp>';

$send_flag = mb_send_mail(
    'contact@exness.co.jp',
    $subject,
    $body,
    $headers,
);

$result['status'] = true;
echo json_encode($result);
exit;
