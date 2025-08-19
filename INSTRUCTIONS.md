# GitHub Profile README Generator

这个项目帮助您生成一个专业的 GitHub Profile README 文件，包含动态统计、技能徽章、项目展示等功能。

## 🚀 快速开始

### 1. 安装依赖
```bash
npm install
```

### 2. 自定义您的信息
编辑 `profile-config.json` 文件，修改其中的个人信息：

```json
{
  "personalInfo": {
    "name": "您的姓名",
    "title": "您的职位/角色",
    "email": "您的邮箱",
    "githubUsername": "您的GitHub用户名",
    // ... 其他信息
  }
}
```

### 3. 生成 README
```bash
npm run generate
```

或者直接运行：
```bash
node generate-readme.js
```

### 4. 部署到 GitHub
1. 在 GitHub 上创建一个与您的用户名相同的公共仓库
2. 将生成的 `README.md` 文件复制到该仓库
3. 提交并推送代码

## 📝 配置说明

### personalInfo (个人信息)
- `name`: 您的姓名
- `title`: 职位或角色标题
- `location`: 所在地区
- `company`: 公司名称
- `email`: 联系邮箱
- `githubUsername`: GitHub 用户名（重要：用于生成统计图表）
- `portfolioUrl`: 个人网站链接
- `blogUrl`: 博客链接
- `linkedinUrl`: LinkedIn 链接
- `twitterUrl`: Twitter 链接

### aboutMe (关于我)
- `currentWork`: 当前工作内容
- `currentLearning`: 正在学习的技术
- `lookingToCollaborate`: 希望合作的项目类型
- `askMeAbout`: 擅长的技术领域
- `funFact`: 有趣的事实

### skills (技能)
- `programmingLanguages`: 编程语言列表
- `frontend`: 前端技术栈
- `backend`: 后端技术栈
- `databases`: 数据库技术
- `cloudDevOps`: 云服务和 DevOps 工具
- `tools`: 开发工具

### projects (项目展示)
每个项目包含：
- `name`: 项目名称
- `url`: 项目链接
- `description`: 项目描述
- `technologies`: 使用的技术
- `features`: 项目特性列表

## 🎨 功能特性

### ✨ 动态组件
- **打字动画横幅**: 展示您的技能和角色
- **GitHub 统计**: 自动显示您的 GitHub 活动统计
- **技能徽章**: 自动生成各种技术的专业徽章
- **贡献图表**: 显示您的代码贡献活动
- **访问计数器**: 统计档案页面访问次数

### 🏆 统计展示
- GitHub 统计信息
- 语言使用分布
- 连续贡献记录
- GitHub 奖杯
- 活动图表

### 🔧 自定义选项
- 完全可配置的个人信息
- 灵活的技能分类
- 自定义项目展示
- 社交媒体链接

## 🛠️ 高级自定义

### 添加新的技能徽章
在 `generate-readme.js` 文件中的 `badgeConfig` 对象中添加新的技能配置：

```javascript
const badgeConfig = {
  '新技能': { 
    color: '颜色代码', 
    logo: 'logo名称', 
    logoColor: 'logo颜色' 
  }
};
```

### 自定义主题
您可以修改以下主题：
- `radical`: 红色主题（默认）
- `dark`: 深色主题
- `tokyonight`: 东京夜景主题
- `onedark`: One Dark 主题
- `cobalt`: 钴蓝主题
- `synthwave`: 合成波主题
- `highcontrast`: 高对比主题
- `dracula`: 德古拉主题

在生成器脚本中修改 `theme=radical` 为您喜欢的主题。

## 📋 使用说明

1. **首次使用**: 
   - 克隆或下载这个项目
   - 安装依赖: `npm install`
   - 编辑配置文件: `profile-config.json`
   - 生成 README: `npm run generate`

2. **更新信息**:
   - 修改 `profile-config.json`
   - 重新运行 `npm run generate`
   - 将新的 README 复制到您的 GitHub profile 仓库

3. **GitHub Profile 仓库设置**:
   - 仓库名必须与您的 GitHub 用户名完全一致
   - 仓库必须是公共的
   - README.md 文件放在仓库根目录

## 🌟 Pro Tips

1. **定期更新**: 随着技能增长和项目完成，记得更新您的配置文件
2. **GitHub Username**: 确保配置文件中的 GitHub 用户名正确，否则统计图表无法显示
3. **图片优化**: 如果加载速度慢，可以考虑使用 CDN 或本地图片
4. **移动端适配**: 生成的 README 已经考虑了移动端显示效果

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

---

如果这个项目对您有帮助，请给它一个 ⭐ 星标！
