new Vue({
    el: "#app",
    data: {},
    created: function () {
        this.redirect();
        this.$message({
            dangerouslyUseHTMLString: true,
            message: '系统域名更改为 <b style="color: green">www.caoayu.top</b>,旧域名 <b style="color: red">www.caoayu.xyz</b>已过期',
            type: 'warning',
            showClose: true,
            duration: 8000,
        });
    },
    methods: {
        redirect: () => {
            let host = window.location.host;
            let words = host.split('.');
            if (words.length === 3) {
                let ext = words[words.length - 1];
                if (ext !== 'top') {
                    window.location.href = "https://www.caoayu.top";
                }
            }

        }
    }
})