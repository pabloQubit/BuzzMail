const a2_0x3ecc=['split','assunto','emailUnico','pagHtml','Titulo\x20','get','conteudoHTML','iniciar','log-symbols','__esModule','Assunto\x20','nodemailer','sendMail','logins','form','n/a','loginUnico','defineProperty','iniciarEnvios','push','gmail','De\x20','__importDefault','size','dirEmailsList','Erro\x20ao\x20enviar:\x20','preparar','\x20para\x20','default','message','loops','../console','text','eachLine','positivo','success','prompts','limite','perguntarInfos','Enviado\x20com\x20sucesso!','line-reader','loginsEmail','includes','caminhoListaEmails'];(function(_0x45acfd,_0x3ecc55){const _0x35f767=function(_0x3e1f1d){while(--_0x3e1f1d){_0x45acfd['push'](_0x45acfd['shift']());}};_0x35f767(++_0x3ecc55);}(a2_0x3ecc,0xac));const a2_0x35f7=function(_0x45acfd,_0x3ecc55){_0x45acfd=_0x45acfd-0x0;let _0x35f767=a2_0x3ecc[_0x45acfd];return _0x35f767;};const _0x3f584c=a2_0x35f7;'use strict';var __importDefault=this&&this[_0x3f584c('0x1a')]||function(_0x3e1f1d){const _0xdb466=_0x3f584c;return _0x3e1f1d&&_0x3e1f1d[_0xdb466('0xd')]?_0x3e1f1d:{'default':_0x3e1f1d};};Object[_0x3f584c('0x15')](exports,_0x3f584c('0xd'),{'value':!![]});const prompts_1=__importDefault(require(_0x3f584c('0x28'))),line_reader_1=__importDefault(require(_0x3f584c('0x0'))),nodemailer_1=__importDefault(require(_0x3f584c('0xf'))),console_1=__importDefault(require(_0x3f584c('0x23'))),log_symbols_1=__importDefault(require(_0x3f584c('0xc')));class NodeMailer{constructor(_0x4fe7be){const _0x8f8559=_0x3f584c;this[_0x8f8559('0x3')]=_0x4fe7be[_0x8f8559('0x1c')],this['logins']=_0x4fe7be[_0x8f8559('0x1')],this[_0x8f8559('0x7')]=_0x4fe7be[_0x8f8559('0xa')],this[_0x8f8559('0x14')]=_0x4fe7be[_0x8f8559('0x6')]!==undefined?_0x4fe7be[_0x8f8559('0x6')]:_0x8f8559('0x13'),this[_0x8f8559('0x5')]='',this['titulo']='',this[_0x8f8559('0x22')]=_0x4fe7be['limite']===0x0?0x1f4*this['logins']['size']:_0x4fe7be[_0x8f8559('0x29')];}[_0x3f584c('0xb')](){const _0x15bf5b=_0x3f584c;this[_0x15bf5b('0x2a')]();}[_0x3f584c('0x16')](){const _0x326b3c=_0x3f584c;var _0x93b891;let _0x2a91d7=0x0,_0x4dd643=0x1,_0x5c2074=[],_0x1c4d0c,_0x2e2d8d=0x0;const _0xca20de=0x5;if(this[_0x326b3c('0x11')][_0x326b3c('0x1b')]<=0x1)_0x5c2074[0x0]=this[_0x326b3c('0x14')],_0x5c2074[0x1]=this[_0x326b3c('0x11')][_0x326b3c('0x9')](this[_0x326b3c('0x14')]);else _0x5c2074=(_0x93b891=this['logins']['get'](0x0))===null||_0x93b891===void 0x0?void 0x0:_0x93b891[_0x326b3c('0x4')]('\x20');_0x1c4d0c=this['preparar'](_0x5c2074[0x0],_0x5c2074[0x1]);let _0x3591c3=new Array();line_reader_1[_0x326b3c('0x20')][_0x326b3c('0x25')](this['caminhoListaEmails'],_0x5c6503=>{const _0x59abc9=_0x326b3c;var _0xcae23c;if(_0x2a91d7>this[_0x59abc9('0x22')])return![];if(_0x2a91d7===0x1f4)_0x5c2074=(_0xcae23c=this[_0x59abc9('0x11')][_0x59abc9('0x9')](_0x4dd643++))===null||_0xcae23c===void 0x0?void 0x0:_0xcae23c[_0x59abc9('0x4')]('\x20'),_0x2a91d7=0x0,_0x1c4d0c=this[_0x59abc9('0x1e')](_0x5c2074[0x0],_0x5c2074[0x1]);else _0x2a91d7+=_0xca20de;if(_0x5c6503[_0x59abc9('0x2')](','))_0x3591c3[_0x59abc9('0x17')](..._0x5c6503[_0x59abc9('0x4')](','));_0x2e2d8d<=_0xca20de&&this[_0x59abc9('0x22')]>_0xca20de?(_0x3591c3[_0x59abc9('0x17')](_0x5c6503),_0x2e2d8d++):(_0x2e2d8d=0x0,this[_0x59abc9('0x22')]>0x1?console_1[_0x59abc9('0x20')][_0x59abc9('0x26')](_0x59abc9('0x19')+_0x5c2074[0x0]+_0x59abc9('0x1f')+_0x3591c3[0x0]+','+_0x3591c3[0x1]+','+_0x3591c3[0x3]+','+_0x3591c3[0x4]):console_1[_0x59abc9('0x20')][_0x59abc9('0x26')](_0x59abc9('0x19')+_0x5c2074[0x0]+_0x59abc9('0x1f')+_0x5c6503),_0x1c4d0c[_0x59abc9('0x10')]({'from':_0x5c2074[0x0],'to':this['loops']<_0xca20de?_0x5c6503:_0x3591c3,'subject':this[_0x59abc9('0x5')],'text':this['titulo'],'html':this['pagHtml']},_0x3fd9e9=>{const _0x1b11e5=_0x59abc9;if(_0x3fd9e9)console_1[_0x1b11e5('0x20')]['negativo'](_0x1b11e5('0x1d')+_0x3fd9e9[_0x1b11e5('0x21')]);console['log'](log_symbols_1[_0x1b11e5('0x20')][_0x1b11e5('0x27')],_0x1b11e5('0x2b')),_0x3591c3=[];}));});}[_0x3f584c('0x1e')](_0x2b0ada,_0x2235fc){const _0x1b9a14=_0x3f584c;return nodemailer_1[_0x1b9a14('0x20')]['createTransport']({'service':_0x1b9a14('0x18'),'auth':{'user':_0x2b0ada,'pass':_0x2235fc}});}async[_0x3f584c('0x2a')](){const _0x375e9a=_0x3f584c,_0x16ee6d=await prompts_1[_0x375e9a('0x20')]({'type':_0x375e9a('0x24'),'name':_0x375e9a('0x12'),'message':_0x375e9a('0x8')}),_0x3c72a5=await prompts_1['default']({'type':_0x375e9a('0x24'),'name':_0x375e9a('0x12'),'message':_0x375e9a('0xe')});this['titulo']=_0x16ee6d[_0x375e9a('0x12')],this[_0x375e9a('0x5')]=_0x3c72a5[_0x375e9a('0x12')],this[_0x375e9a('0x16')]();}}exports['default']=NodeMailer;