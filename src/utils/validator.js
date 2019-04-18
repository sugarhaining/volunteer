function validateRules(text, options = {}) { //生成验证规则
    return {
        rules: [{
            required: true,
            message: `${text}`,
        }, options],
    }
}


export {
    validateRules,//初始化验证规则
}