"use strict";(self.webpackChunk_adobe_uix_docs=self.webpackChunk_adobe_uix_docs||[]).push([[952],{46579:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return m},default:function(){return u}});var o=t(87462),a=t(63366),s=(t(15007),t(64983)),r=t(91515),i=["components"],m={},c={_frontmatter:m},d=r.Z;function u(e){var n=e.components,t=(0,a.Z)(e,i);return(0,s.mdx)(d,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"aem-content-fragments-editor-extension-points"},"AEM Content Fragments Editor Extension Points"),(0,s.mdx)("h3",{id:"shared-context"},"Shared Context"),(0,s.mdx)("p",null,"In order to empower UI Extensions perform useful actions Content Fragments Editor provides access to data that simplifies user authentication and usage of AEM API. Such data may be accessed through ",(0,s.mdx)("inlineCode",{parentName:"p"},"sharedContext")," property of ",(0,s.mdx)("inlineCode",{parentName:"p"},"host"),"."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},'import { attach } from "@adobe/uix-guest";\n\nconst guestConnection = await attach({\n    id: "my-id"\n}\nconst context = guestConnection.sharedContext;\nconst aemHost = context.get("aemHost");\n')),(0,s.mdx)("p",null,"Available shared context data:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},'{\n    aemHost: string, // hostname of connected AEM environment\n    locale: string, // locale of current user\n    theme: "light" | "dark", // color schema selected by current user\n    auth: {\n        imsOrg: string, // current IMS organization\n        imsToken: string, // user token\n        apiKey: string, // API key to use for requests to Adobe services\n        imsOrgName: string, // Human readable organization name\n        authScheme: "Bearer" // Auth schema that should be used during communication with Adobe services\n    }\n}\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-services-aem-cf-editor-api-index-md-87bc4fa4df43f48623b4.js.map