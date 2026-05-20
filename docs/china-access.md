# 中国大陆访问方案

## 结论

`https://cian-shen.github.io/` 使用 GitHub Pages 托管。这个地址在中国大陆网络下可能出现无法访问、间歇性超时或静态资源加载失败。这个问题不是 React 或 Vite 代码问题，单纯修改前端代码无法稳定解决。

推荐保留 GitHub Pages 作为海外与备用地址，同时新增一个中国大陆访问更稳定的镜像站点：

- 源码仓库：继续使用 `Cian-Shen/cian-shen.github.io`
- 海外/备用地址：`https://cian-shen.github.io/`
- 大陆主访问地址：部署到 Tencent EdgeOne Pages 后填写

## 推荐方案：EdgeOne Pages 镜像部署

EdgeOne Pages 支持从 GitHub 仓库导入静态站点。当前项目是标准 Vite 静态站，构建参数如下：

```text
Framework preset: Vite
Build command: npm install && npm run build
Output directory: dist
Root directory: /
Node.js version: 20 或更高
```

上线步骤：

1. 打开 EdgeOne Pages 控制台。
2. 新建项目，选择从 GitHub 导入。
3. 授权并选择仓库 `Cian-Shen/cian-shen.github.io`。
4. 按上面的构建参数配置。
5. 部署成功后，记录 EdgeOne 分配的访问域名。
6. 将新的大陆访问地址补充到 `README.md` 和本文件。

## 自定义域名建议

如果只是给简历或作品集使用，可以先使用 EdgeOne Pages 默认域名。

如果要使用自定义域名，建议：

- 准备一个短域名，例如 `shen.ai` 或 `shenzhixiang.com`。
- 海外访问可继续指向 GitHub Pages。
- 大陆访问建议指向 EdgeOne Pages。
- 若域名需要接入中国大陆 CDN 加速，通常需要完成域名备案。

## 后续维护方式

内容仍然只改源码仓库：

```bash
git add .
git commit -m "Update site content"
git push
```

GitHub Pages 会继续自动部署。EdgeOne Pages 若配置了 GitHub 自动构建，也会在 push 后自动更新。

## 验收清单

部署完成后检查：

- 中国大陆移动网络可打开大陆主访问地址。
- 中国大陆宽带网络可打开大陆主访问地址。
- 首页、项目区、经历区、联系区都能正常加载。
- 浏览器控制台没有资源 404。
- 邮箱链接可正常触发邮件客户端。

