<template>
    <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode" />
    <Editor style="height: 800px; overflow-y: hidden;" v-model="valueHtml" :defaultConfig="editorConfig" :mode="mode"
        @onCreated="handleCreated" />
</template>

<script setup>
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

const mode = 'default' // 或 'simple'
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref('<p>hello</p>')

// 模拟 ajax 异步获取内容
onMounted(() => {
    setTimeout(() => {
        valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
    }, 1500)
})

const toolbarConfig = {
    toolbarKeys: [
        "bold", // 字体加粗 
        "underline", // 字体下划线 
        "italic", // 字体斜体 
        "through", // 字体删除线 
        "code", // 字体代码 
        "sub", // 下标 "sup", // 上标 
        "clearStyle", // 清除字体样式 
        "color", // 字体颜色 
        "bgColor", // 背景颜色 
        "fontSize", // 字体大小 
        "fontFamily", // 字体 
        // "indent", // 增加缩进 
        // "delIndent", // 减少缩进 
        // "justifyLeft", // 左对齐 
        // "justifyRight", // 右对齐 
        // "justifyCenter", // 居中对齐 
        // "justifyJustify", // 两端对齐 
        '|', // 分割线
        "lineHeight", // 行间距 
        "insertImage", // 插入图片 
        "deleteImage", // 删除图片 
        "editImage", // 编辑图片 
        "viewImageLink", // 查看图片链接 
        "imageWidth30", // 图片宽度30% 
        "imageWidth50", // 图片宽度50% 
        "imageWidth100", // 图片宽度100% 
        "divider", // 分隔线 
        "emotion", // 表情 
        "insertLink", // 插入链接 
        "editLink", // 编辑链接 
        "unLink", // 取消链接 
        "viewLink", // 查看链接 
        "codeBlock", // 代码块 
        "blockquote", // 引用块 
        '|',
        "headerSelect", // 头部类型选择 
        "header1", // 头部1 
        "header2", // 头部2 
        "header3", // 头部3 
        "header4", // 头部4 
        "header5", // 头部5 
        "todo", // 待办事项 
        "redo", // 重做 
        "undo", // 撤销 
        "fullScreen", // 全屏 
        "enter", // 换行 
        "bulletedList", // 无序列表 
        "numberedList", // 有序列表 
        "insertTable", // 插入表格 
        "deleteTable", // 删除表格 
        "insertTableRow", // 插入表格行 
        "deleteTableRow", // 删除表格行 
        "insertTableCol", // 插入表格列 
        "deleteTableCol", // 删除表格列 
        "tableHeader", // 表格标题 
        "tableFullWidth", // 表格全宽 
        // "insertVideo", // 插入视频 
        // "uploadVideo", // 上传视频 
        "editVideoSize", // 编辑视频大小 
        "uploadImage", // 上传图片 
        "codeSelectLang", // 选择代码语言 
        // 设置为下拉选择    ---------------------------------------   一下代码为下拉样式
        {
            key: 'group-video',
            title: '视频',  // 下拉名称
            iconSvg:
                '<svg viewBox="0 0 1024 1024"><path d="M981.184 160.096C837.568 139.456 678.848 128 512 128S186.432 139.456 42.816 160.096C15.296 267.808 0 386.848 0 512s15.264 244.16 42.816 351.904C186.464 884.544 345.152 896 512 896s325.568-11.456 469.184-32.096C1008.704 756.192 1024 637.152 1024 512s-15.264-244.16-42.816-351.904zM384 704V320l320 192-320 192z"></path></svg>',   // 下拉图标
            menuKeys: ['insertVideo', 'uploadVideo'],  // 插入视屏  // 视屏上传
        },
        '|',
        {
            key: 'group-justify',
            title: '对齐',
            iconSvg:
                '<svg viewBox="0 0 1024 1024"><path d="M768 793.6v102.4H51.2v-102.4h716.8z m204.8-230.4v102.4H51.2v-102.4h921.6z m-204.8-230.4v102.4H51.2v-102.4h716.8zM972.8 102.4v102.4H51.2V102.4h921.6z"></path></svg>',
            menuKeys: ['justifyLeft', 'justifyRight', 'justifyCenter', 'justifyJustify'], // 对齐的四种方式
        },
        {
            key: 'group-indent',
            title: '缩进',
            iconSvg:
                '<svg viewBox="0 0 1024 1024"><path d="M0 64h1024v128H0z m384 192h640v128H384z m0 192h640v128H384z m0 192h640v128H384zM0 832h1024v128H0z m0-128V320l256 192z"></path></svg>',
            menuKeys: ['indent', 'delIndent'], // 缩进的两种方式
        },
    ]
}
const editorConfig = { placeholder: '请输入内容...' }

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
})

const handleCreated = (editor) => {
    editorRef.value = editor // 记录 editor 实例，重要！
}
</script>
