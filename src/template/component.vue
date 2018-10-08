<el-form>
    <el-form-item class="formItem" label="姓名" prop="name">
        <el-input class="formInput" size="small" v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item class="formItem" label="年龄" prop="age">
        <el-input class="formInput" size="small" v-model="form.age"></el-input>
    </el-form-item>
    <el-form-item class="formItem" label="性别" prop="sex">
        <el-radio v-model="sex" value="0" label="0">radio value</el-radio>
        <el-radio v-model="sex" value="1" label="1">radio value</el-radio>
        <el-radio v-model="sex" value="2" label="2">radio value</el-radio>
    </el-form-item>
    <el-form-item class="formItem" label="工作" prop="work">
        <el-checkbox v-model="work" true-label="1" size="small" label="工作"></el-checkbox>
    </el-form-item>
</el-form>
<el-table>
    <el-table-column header-align="center" prop="name" width="110"
                     align="center" label="姓名"> </el-table-column>
    <el-table-column header-align="center" prop="age" width="110" align="center"
                     label="年龄"> </el-table-column>
    <el-table-column header-align="center" prop="sex" width="110" align="center"
                     label="性别"> </el-table-column>
    <el-table-column header-align="center" prop="work" width="110"
                     align="center" label="工作"> </el-table-column>
</el-table>
