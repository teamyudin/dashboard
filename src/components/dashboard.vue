<template>
    <el-container>
      <el-header style="background-color: #80bfff">
        <el-row style="margin-top:10px">
          <el-col :span="4">
            <img src="../assets/fakery.png" style="height: 40px;">
          </el-col>
          <el-col :span="20">
            <div style="float:right;">
              <el-dropdown>
                <el-button type="primary">
                    John Doe <i class="el-icon-arrow-down el-icon--right"></i>
                  </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item >Profile</el-dropdown-item>
                  <el-dropdown-item divided>Log Out</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-col>
        </el-row>
      </el-header>

      <el-main style="background-color:#e6f2ff">

        <el-row :gutter="20">
          <el-col :span="12">
                <el-row>
                  <el-col>Gloria Hodge</el-col>
                </el-row>
                <el-row>
                  <el-col>SSN# 345-44-9988</el-col>
                </el-row>
                <el-row>
                  <el-col>Customer since: 12/26/1979</el-col>
                </el-row>
                <el-row>
                  <el-col><el-tag type="danger">High Risk</el-tag></el-col>
                </el-row>
          </el-col>

          <el-col :span="12" style="height: 350px;">
            <card name="Review">
              <div slot="body">
                <el-row>
                  <el-col>
                    <el-tag>Under Review</el-tag>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col>Assigned To: John Doe</el-col>
                </el-row>
                <el-row>
                  <el-col>Due on: 12/26/2018</el-col>
                </el-row>

                <el-row>
                  <el-steps :active="1" align-center>
                    <el-step title="Onboarding" description="Onboarded on 1/1/2017" icon="fa fa-university"></el-step>
                    <el-step title="90 Day/Tolerence" description="90 Day/Tolerence" icon="fa fa-calendar"></i>"></el-step>
                    <el-step title="Periodic" icon="fa fa-clock-o"></el-step>
                  </el-steps>
                </el-row>

                <el-row>
                  <el-col>
                    <el-badge :value="3" class="item" style="float: right;">
                      <el-button type="info"  size="small">Past Reviews</el-button>
                    </el-badge>

                  </el-col>
                </el-row>
              </div>
            </card>
          </el-col>

        </el-row>

        <el-row :gutter="20">
          <el-col :span="12">
            <el-row :gutter="20">
              <el-col :span="12" style="height: 300px;">
                <card name="RECENT Documents">
                  <div slot="body">

                    <el-row :gutter="20">
                      <el-col :span="4">
                        <i class="el-icon-document" strong></i>
                      </el-col>
                      <el-col :span="20">
                        <div style="float:right; color: #1c8d79; font-size: large">24</div>
                      </el-col>
                    </el-row>

                    <hr/>

                    <el-upload
                      class="upload-demo"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :on-preview="handlePreview"
                      :on-remove="handleRemove"
                      multiple
                      :limit="3"
                      :on-exceed="handleExceed"
                      :file-list="fileList">
                      <el-button size="small" type="primary" icon="el-icon-upload">Upload</el-button>
                      <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
                    </el-upload>

                  </div>
                </card>
              </el-col>
              <el-col :span="12" style="height: 300px;">
                <card name="Recent Comments">
                  <div slot="body">
                      <div class="text item">Jojn Doe: I'm fine</div>
                      <div class="text item">Jane Doe: How are you</div>
                      <div class="text item">Sonu Nigam: Whats going on here?</div>
                  </div>
                </card>
              </el-col>
            </el-row>

          </el-col>

          <el-col :span="12" style="height: 300px;">
            <card name="Customers">
              <div slot="body">
                <el-row :gutter="20">
                  <el-col :span="4">
                    <i class="fa fa-user-o" aria-hidden="true"></i>
                  </el-col>
                  <el-col :span="20">
                    <div style="float:right; color: #1c8d79; font-size: large">6</div>
                  </el-col>
                </el-row>

                <hr/>

                <el-row>Total CIS Balance: $1,000.000</el-row>

              </div>
            </card>
          </el-col>

        </el-row>

        <el-row :gutter="20" style="margin-bottom: 15px;">
          <el-col :span="12" style="height: 300px;">
            <card name="Portfolio Questionnaire">
              <div slot="body">
                <el-row :gutter="20">
                  <el-col :span="4">
                    Business Entity
                  </el-col>
                  <el-col :span="20">
                    <div style="float:right; color: #1c8d79; font-size: large">25/100</div>
                  </el-col>
                </el-row>

                <hr/>
                <el-progress type="circle" :percentage="25"></el-progress>
              </div>
            </card>
          </el-col>

          <el-col :span="12" style="height: 300px;">
            <card name="Accounts">
              <div slot="body">
                <el-row :gutter="20">
                  <el-col :span="4">
                    <i class="fa fa-book" aria-hidden="true"></i>
                  </el-col>
                  <el-col :span="20">
                    <div style="float:right; color: #1c8d79; font-size: large">7</div>
                  </el-col>
                </el-row>

                <hr/>

                <el-row>Total Balance: $3,000.000</el-row>
                <el-row>Business Accounts: 4</el-row>
                <el-row>Personal Accounts: 3</el-row>
                <el-row>
                  <el-col>
                    <el-badge :value="2" class="item" style="float: right;">
                      <el-button type="warning" size="small">Unexpected Activity</el-button>
                    </el-badge>

                  </el-col>
                </el-row>
              </div>
            </card>
          </el-col>

        </el-row>

      </el-main>
    </el-container>

</template>

<script>

import card from './card/card.vue'

export default {
  name: 'dashboard',

  data () {
    return {
      fileList: [
        {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
        {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
    }
  },

  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`The limit is 3, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`)
    }
  },

  components: {
    card
  }
}
</script>

<style>

html * {
  font-family: "Open Sans Semibold"
}

.fa{
      font-size: 25px
}

  .el-row{
    margin-bottom: 15px;
  }

  .text {
      font-size: 14px;
    }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
