(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{454:function(v,_,t){"use strict";t.r(_);var s=t(53),a=Object(s.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"https-原理解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#https-原理解析"}},[v._v("#")]),v._v(" HTTPS 原理解析")]),v._v(" "),t("blockquote",[t("p",[v._v("HTTPS 保证了 Web 数据传输过程中的传输安全")])]),v._v(" "),t("blockquote",[t("p",[v._v("HTTPS：采用 对称加密 和 非对称加密 结合以及数字证书的方式来保护浏览器和服务端之间的通信安全。")])]),v._v(" "),t("h2",{attrs:{id:"不进行加密"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不进行加密"}},[v._v("#")]),v._v(" 不进行加密")]),v._v(" "),t("p",[v._v("明文传输：在客户端和服务器数据传输过程中，黑客可以获取到传输的账号密码，非常不安全")]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("注意")]),v._v(" "),t("p",[v._v("明文就相当于裸奔")])]),v._v(" "),t("h2",{attrs:{id:"对称加密"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对称加密"}},[v._v("#")]),v._v(" 对称加密")]),v._v(" "),t("blockquote",[t("p",[v._v("服务器每次发送真实数据前，会先生成一把密钥传输(以明文方式传输密钥容易被劫持)给客户端，服务器给客户端发送的真实数据会先用这把密钥进行加密，客户端收到加密数据后再用密钥进行解密(客户端给服务器发送数据同理)")])]),v._v(" "),t("ul",[t("li",[v._v("对客户端要发送的数据用秘钥进行加密")]),v._v(" "),t("li",[v._v("以密文形式放给服务器端")]),v._v(" "),t("li",[v._v("服务器端对密文用秘钥进行解密")])]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("注意")]),v._v(" "),t("p",[t("code",[v._v("F(K,data)=X")])]),v._v(" "),t("p",[t("code",[v._v("F(K,X)=data")])]),v._v(" "),t("p",[v._v("对称加密，K 只有一个，客户端和服务器端都是用 K 进行加密解密")]),v._v(" "),t("p",[v._v("K 可能会被劫持，因此不安全")])]),v._v(" "),t("h2",{attrs:{id:"非对称加密"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#非对称加密"}},[v._v("#")]),v._v(" 非对称加密")]),v._v(" "),t("p",[v._v("非对称加密：")]),v._v(" "),t("blockquote",[t("p",[v._v("客户端和服务器都有两把密钥，一把公钥一把私钥(公钥加密的数据只有私钥才能解密，私钥加密的数据只有公钥才能解密)，服务器在给客户端发送真实数据前，先用客户端明文传输给服务器的公钥进行加密，客户端收到后用自己的私钥进行解密，反之同理")])]),v._v(" "),t("ul",[t("li",[v._v("对客户端要发送的数据用公钥进行加密")]),v._v(" "),t("li",[v._v("以密文形式放给服务器端")]),v._v(" "),t("li",[v._v("服务器端对密文用私钥进行解密（反之同理）")])]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("注意")]),v._v(" "),t("p",[t("code",[v._v("F(pK,data)=X")])]),v._v(" "),t("p",[t("code",[v._v("F(sK,X)=data")])]),v._v(" "),t("p",[t("code",[v._v("F(sk,data)=Y")])]),v._v(" "),t("p",[t("code",[v._v("F(pK,Y)=data")])]),v._v(" "),t("p",[v._v("非对称加密，有两个秘钥，一个公钥一个秘钥。pK 所有人都可以拿，sK 只有服务器端有。")]),v._v(" "),t("p",[v._v("服务器端到客户端不安全")])]),v._v(" "),t("h2",{attrs:{id:"对称和非对称结合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对称和非对称结合"}},[v._v("#")]),v._v(" 对称和非对称结合")]),v._v(" "),t("p",[v._v("服务器端有公钥和私钥")]),v._v(" "),t("ul",[t("li",[v._v("客户端 向 服务器端 索要 pK")]),v._v(" "),t("li",[v._v("服务器端 返回 pK")]),v._v(" "),t("li",[v._v("使用公钥对相关字符串（K）进行加密 Y 之后上传给服务器端")]),v._v(" "),t("li",[v._v("服务器端对 Y 进行解密 获取到字符串（K）")]),v._v(" "),t("li",[v._v("该字符串（K）就是为 后续进行对称加密的 公钥（K）")])]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("注意")]),v._v(" "),t("p",[v._v("中间人劫持，当客户端向服务器端索要公钥时，被中间人拦截，返回假的公钥 k")])]),v._v(" "),t("h2",{attrs:{id:"对称-非对称-ca-机构-认证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对称-非对称-ca-机构-认证"}},[v._v("#")]),v._v(" 对称+非对称+CA 机构 认证")]),v._v(" "),t("p",[v._v("CA：存放 cPK 和 cSK\n服务器端：PK 和 SK")]),v._v(" "),t("ul",[t("li",[v._v("客户端 向 服务器端 索要 license")]),v._v(" "),t("li",[v._v("服务器端：F(cSK,PK)=license（CA 端运行返回给服务器端 license）,返回 license")]),v._v(" "),t("li",[v._v("cPK（写死在客户端，不需要再去 CA 机构获取）")]),v._v(" "),t("li",[v._v("然后通过客户端 F(license,cPK)=PK 获取 PK")])]),v._v(" "),t("h3",{attrs:{id:"详细步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#详细步骤"}},[v._v("#")]),v._v(" 详细步骤")]),v._v(" "),t("p",[v._v("访问百度为例：")]),v._v(" "),t("ul",[t("li",[v._v("1.客户端--\x3e服务器端 支持 SSL 版本，非对称算法，随机数 1")]),v._v(" "),t("li",[v._v("2.服务器端--\x3e客户端 定下 SSL 使用版本，对称算法，随机数 2，证书（从 CA 获取）")]),v._v(" "),t("li",[v._v("3.客户端 证书认证")]),v._v(" "),t("li",[v._v("4.客户端--\x3e服务器端 随机数 3 Hash(随机数 1，随机数 2)==XXX")]),v._v(" "),t("li",[v._v("5.服务器端 判断 XXX==Hash(随机数 1，随机数 2)，查看客户端传来的 XXX 和自身 hash 计算的 XXX 是否一致，认证成功后，随机数 1,2,3 生成 K")]),v._v(" "),t("li",[v._v("6.服务器端--\x3e客户端 hash(第一，第二，第四步) 所有的值生成一个数值 ZZ")]),v._v(" "),t("li",[v._v("7.客户端 也生成一个数值 ZZ hash(第一，第二，第四步) =ZZ，查看本地生成的是否和服务器端传送的一致，一致则也用随机数 1,2,3 生成一个 K，后续使用 K 进行对称加密")])])])}),[],!1,null,null,null);_.default=a.exports}}]);