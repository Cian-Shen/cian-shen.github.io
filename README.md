# 沈治祥个人介绍网站

这是一个基于 React + Vite 的极简个人介绍网站，用于 GitHub Pages 主页仓库 `cian-shen.github.io`。

## 维护内容

日常更新主要修改 `src/content.js`：

- `profile`：姓名、定位、邮箱、首页简介
- `capabilities`：能力关键词
- `projects`：代表项目故事线、关键设计和成果证据
- `experience`：经历时间线

公开网页只保留姓名和邮箱，不展示性别、出生年月等隐私信息。

## 访问地址

- 海外/备用地址：[https://cian-shen.github.io/](https://cian-shen.github.io/)
- 中国大陆主访问地址：待 EdgeOne Pages 镜像部署后填写

## 项目说明与优化手册

面向产品经理的项目说明、维护方法和后续优化路线见：

[docs/123](docs/123)

中国大陆访问方案见：

[docs/china-access.md](docs/china-access.md)

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

## 部署

仓库开启 GitHub Pages 后，`.github/workflows/deploy.yml` 会在推送到 `main` 或 `master` 时自动构建并部署。

首次使用需要在 GitHub 仓库中设置：

`Settings > Pages > Build and deployment > Source > GitHub Actions`

中国大陆访问不建议依赖 `github.io`，建议部署 EdgeOne Pages 镜像，详见 `docs/china-access.md`。
