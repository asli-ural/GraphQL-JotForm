import React from "react";
import { Accordion, Message } from "semantic-ui-react";
import graphqlSchema from "../graphqlSchema.json";
import { format } from "graphql-formatter";
import { Icon } from "semantic-ui-react";
import CodeBlock from "react-highlight-codeblock";

function SideBarSchemaTab(props) {
    let RootQuery = props.schemaObject.RootQuery;
    let UserQuery = props.schemaObject.User;
    let UserFormQuery = props.schemaObject.UserForm;
    let UserUsageQuery = props.schemaObject.UserUsage;
    let UserSubmissions = props.schemaObject.UserSubmissions;
    let UserSubusers = props.schemaObject.UserSubusers;
    let UserHistory = props.schemaObject.UserHistory;
    let UserFolders = props.schemaObject.UserFolders;
    let UserReports = props.schemaObject.UserReports;
    let UserSettings = props.schemaObject.UserSettings;
    let form = props.schemaObject.form;
    let formQuestion = props.schemaObject.formQuestion;
    let submission = props.schemaObject.submission;

    const showSchemaDetails = () => {
        if (props.userQueryCondition) {
            return (
                <span>
                    <CodeBlock
                        code={UserQuery}
                        language="javascript"
                        showLineNumbers={false}
                        style="a11yLight"
                    />
                    <span class="keyword-right">{RootQuery.UserForm}</span>
                    <span
                        class="keyword-right-click"
                        onClick={() =>
                            props.handlerConditionUpdate(
                                "userFormQueryCondition",
                                !props.userFormQueryCondition
                            )
                        }
                        class="type-name"
                    >
                        UserForm
                    </span>
                    <br></br>
                    <span class="keyword-right">
                        {RootQuery.UserSubmissions}
                    </span>
                    <span
                        class="keyword-right-click"
                        onClick={() =>
                            props.handlerConditionUpdate(
                                "userSubmissionsQueryCondition",
                                !props.userSubmissionsQueryCondition
                            )
                        }
                        class="type-name"
                    >
                        UserSubmissions
                    </span>
                </span>
            );
        } else if (props.userFormQueryCondition) {
            return (
                <span>
                    <CodeBlock
                        code={UserFormQuery}
                        language="javascript"
                        showLineNumbers={false}
                        style="a11yLight"
                    />
                </span>
            );
        } else if (props.userUsageQueryCondition) {
            return (
                <span>
                    {" "}
                    <CodeBlock
                        code={UserUsageQuery}
                        language="javascript"
                        showLineNumbers={false}
                        style="a11yLight"
                    />
                </span>
            );
        } else if (props.userSubusersQueryCondition) {
            return (
                <span>
                    <CodeBlock
                        code={UserSubusers}
                        language="javascript"
                        showLineNumbers={false}
                        style="a11yLight"
                    />
                </span>
            );
        } else if (props.userSubmissionsQueryCondition) {
            return (
                <span>
                    <CodeBlock
                        code={UserSubmissions}
                        language="javascript"
                        showLineNumbers={false}
                        style="a11yLight"
                    />
                </span>
            );
        } else if (props.userHistoryQueryCondition) {
            return (
                <span>
                    <CodeBlock
                        code={UserHistory}
                        language="javascript"
                        showLineNumbers={false}
                        style="a11yLight"
                    />
                </span>
            );
        } else if (props.userReportsQueryCondition) {
            return (
                <span>
                    <CodeBlock
                        code={UserReports}
                        language="javascript"
                        showLineNumbers={false}
                        style="a11yLight"
                    />
                </span>
            );
        } else if (props.userSettingsQueryCondition) {
            return (
                <span>
                    <CodeBlock
                        code={UserSettings}
                        language="javascript"
                        showLineNumbers={false}
                        style="a11yLight"
                    />
                </span>
            );
        } else if (props.formQueryCondition) {
            return (
                <span>
                    <CodeBlock
                        code={form}
                        language="javascript"
                        showLineNumbers={false}
                        style="a11yLight"
                    />
                </span>
            );
        } else if (props.submissionQueryCondition) {
            return (
                <span>
                    <CodeBlock
                        code={submission}
                        language="javascript"
                        showLineNumbers={false}
                        style="a11yLight"
                    />
                </span>
            );
        } else if (props.formQuestionQueryCondition) {
            return (
                <span>
                    <CodeBlock
                        code={formQuestion}
                        language="javascript"
                        showLineNumbers={false}
                        style="a11yLight"
                    />
                    <span class="keyword-right">{RootQuery.UserForm}</span>
                    <span
                        class="keyword-right-click"
                        onClick={() =>
                            props.handlerConditionUpdate(
                                "userFormQueryCondition",
                                !props.userFormQueryCondition
                            )
                        }
                        class="type-name"
                    >
                        UserForm
                    </span>
                </span>
            );
        } else if (props.userFoldersQueryCondition) {
            return (
                <span>
                    <CodeBlock
                        code={UserFolders}
                        language="javascript"
                        showLineNumbers={false}
                        style="a11yLight"
                    />
                    <span class="keyword-right">{RootQuery.UserForm}</span>
                    <span
                        class="keyword-right-click"
                        onClick={() =>
                            props.handlerConditionUpdate(
                                "userFormQueryCondition",
                                !props.userFormQueryCondition
                            )
                        }
                        class="type-name"
                    >
                        UserForm
                    </span>
                </span>
            );
        } else if (props.userSubmissionsQueryCondition) {
            return (
                <span>
                    {UserSubmissions}
                    <br />
                    <span class="keyword">{RootQuery.UserForm}</span>
                    <span
                        onClick={() =>
                            props.handlerConditionUpdate(
                                "userSubmissionsQueryCondition",
                                !props.userSubmissionsQueryCondition
                            )
                        }
                        class="type-name"
                    >
                        UserForm
                    </span>
                </span>
            );
        } else {
            return (
                <div>
                    <span class="keyword">{RootQuery.User}</span>
                    <span
                        onClick={() =>
                            props.handlerConditionUpdate(
                                "userQueryCondition",
                                !props.userQueryCondition
                            )
                        }
                        class="type-name"
                    >
                        User
                    </span>
                    <br />
                    <br />
                    <span class="keyword">{RootQuery.UserForm}</span>
                    <span
                        onClick={() =>
                            props.handlerConditionUpdate(
                                "userFormQueryCondition",
                                !props.userFormQueryCondition
                            )
                        }
                        class="type-name"
                    >
                        UserForm
                    </span>
                    <br />
                    <br />
                    <span class="keyword">{RootQuery.UserUsage}</span>
                    <span
                        onClick={() =>
                            props.handlerConditionUpdate(
                                "userUsageQueryCondition",
                                !props.userUsageQueryCondition
                            )
                        }
                        class="type-name"
                    >
                        UserUsage
                    </span>
                    <br />
                    <br />
                    <span class="keyword">{RootQuery.UserSubmissions}</span>
                    <span
                        onClick={() =>
                            props.handlerConditionUpdate(
                                "userSubmissionsQueryCondition",
                                !props.userSubmissionsQueryCondition
                            )
                        }
                        class="type-name"
                    >
                        UserSubmissions
                    </span>
                    <br />
                    <br />
                    <span class="keyword">{RootQuery.UserSubusers}</span>
                    <span
                        onClick={() =>
                            props.handlerConditionUpdate(
                                "userSubusersQueryCondition",
                                !props.userSubusersQueryCondition
                            )
                        }
                        class="type-name"
                    >
                        UserSubusers
                    </span>
                    <br />
                    <br />
                    <span class="keyword">{RootQuery.UserHistory}</span>
                    <span
                        onClick={() =>
                            props.handlerConditionUpdate(
                                "userHistoryQueryCondition",
                                !props.userHistoryQueryCondition
                            )
                        }
                        class="type-name"
                    >
                        UserHistory
                    </span>
                    <br />
                    <br />
                    <span class="keyword">{RootQuery.UserFolders}</span>
                    <span
                        onClick={() =>
                            props.handlerConditionUpdate(
                                "userFoldersQueryCondition",
                                !props.userFoldersQueryCondition
                            )
                        }
                        class="type-name"
                    >
                        UserFolders
                    </span>
                    <br />
                    <br />
                    <span class="keyword">{RootQuery.UserReports}</span>
                    <span
                        onClick={() =>
                            props.handlerConditionUpdate(
                                "UserReportsQueryCondition",
                                !props.UserReportsQueryCondition
                            )
                        }
                        class="type-name"
                    >
                        UserReports
                    </span>
                    <br />
                    <br />
                    <span class="keyword">{RootQuery.UserSettings}</span>
                    <span
                        onClick={() =>
                            props.handlerConditionUpdate(
                                "userSettingsQueryCondition",
                                !props.userSettingsQueryCondition
                            )
                        }
                        class="type-name"
                    >
                        UserSettings
                    </span>
                    <br />
                    <br />
                    <span class="keyword">{RootQuery.form}</span>
                    <span
                        onClick={() =>
                            props.handlerConditionUpdate(
                                "formQueryCondition",
                                !props.formQueryCondition
                            )
                        }
                        class="type-name"
                    >
                        Form
                    </span>
                    <br />
                    <br />
                    <span class="keyword">{RootQuery.formQuestion}</span>
                    <span
                        onClick={() =>
                            props.handlerConditionUpdate(
                                "formQuestionQueryCondition",
                                !props.formQuestionQueryCondition
                            )
                        }
                        class="type-name"
                    >
                        FormQuestions
                    </span>
                    <br />
                    <br />
                    <span class="keyword">{RootQuery.submission}</span>
                    <span
                        onClick={() =>
                            props.handlerConditionUpdate(
                                "submissionQueryCondition",
                                !props.submissionQueryCondition
                            )
                        }
                        class="type-name"
                    >
                        Submission
                    </span>
                </div>
            );
        }
    };

    return (
        <>
            <div class="doc-category">
                {props.returnCondition.length <= 0 ? null : (
                    <button
                        className="return-bar"
                        onClick={() =>
                            props.handlerReturnCondition(props.returnCondition)
                        }
                    >
                        <Icon name="angle left" color="blue" />
                    </button>
                )}{" "}
                Root Types
                <div class="doc-category-item">
                    {props.rootQueryCondition ? (
                        <div className="doc-link">{showSchemaDetails()}</div>
                    ) : (
                        <div>
                            <span class="keyword">query: </span>
                            <span
                                onClick={() =>
                                    props.handlerConditionUpdate(
                                        "rootQueryCondition",
                                        !props.rootQueryCondition
                                    )
                                }
                                class="type-name"
                            >
                                RootQueryType
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default SideBarSchemaTab;
