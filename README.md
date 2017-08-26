jQuery.notSupported
===

非対応端末でアクセスした時、アラートを出すjQueryプラグイン

### Installation ###
```
npm install --save jquery.notsupported
```

### Usage ###
```html
<script src="jquery.min.js"></script>
<script src="jquery.notsupported.min.js"></script>
<script>
  $(function() {
    $.notSupported(options);
  });
</script>
```

### Options ###

- android  
__Type__: number  
__Default__: 4  
指定したAndroidバージョン未満の場合アラートを出す

- ios  
__Type__: number  
__Default__: 8  
指定したiOSバージョン未満の場合アラートを出す

- text  
__Type__: string  
__Default__: '大変申し訳ございませんが、お客様の端末は本サービスの非対応端末になります。'  
指定した文字列を出力する

- class  
__Type__: string  
__Default__: 'notsupported'  
指定したclass名を付与する

### jQuery Support ###
- 3.0.0+
- 2.0.0+
- 1.2.3+

### Browser Support ###
- Google Chrome  
- Safari  

### License ###  
MIT