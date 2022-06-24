const path = require("path");
const dirTree = require("directory-tree");
const SRC_PATH = path.resolve(__dirname, "../../pages");
const slideJson = require('./slide.js')

// 按照 vuepress '分组侧边栏'的规范生成单个配置
function toSidebarOption(tree = []) {
    if (!Array.isArray(tree)) return [];
    return tree.map((v) => {
        if (v.type === "directory") {
            return {
                title: slideJson[v.name]?slideJson[v.name]:v.name,
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 1,
                children: toSidebarOption(v.children),
            };
        } else {
            // 因为所有的md文件必须放到'docs'文件夹下
            // 所以相对路径就是'docs'后面的部分
            // 最后把扩展名去掉, 就是路由的路径
            return v.name.replace(/\.md$/, "");
        }
    });
}

/**
 * @desc 根据 自定义文件夹'docs/src'自动生成vuepress的sidebar选项
 * @param {string} srcPath 自定义文件夹路径,必须在docs文件夹下
 * @returns {object[]}
 */
function autoGetSidebarOptionBySrcDir(srcPath = SRC_PATH) {
    const srcDir = dirTree(srcPath, {
        extensions: /\.md$/,
        normalizePath: true,
    });
    const ress = toSidebarOption(srcDir.children)
    console.log(ress);
    return toSidebarOption(srcDir.children);
    // [title:'group-name', children:['/route-a','route-b']]
}


module.exports = autoGetSidebarOptionBySrcDir;