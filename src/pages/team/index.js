import React from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import config from "./languages.json";
import Layout from '@theme/Layout';
import './index.less';

export default function () {
    const isBrowser = useIsBrowser();
    const language = isBrowser && location.pathname.indexOf('/zh-CN/') === 0 ? 'zh-CN' : 'en';
    const dataSource = config?.[language];

    return (
        <Layout title="team" description="team page">
            <div className="container">
            <div className="block team_page">
                <h3 className="team_title">Ambari Team</h3>
                <p className="team_desc" dangerouslySetInnerHTML={ { __html: dataSource.info.desc } }/>
                <h3 className="team_title">PMC</h3>
                <p className="team_desc">{dataSource.info.tip}</p>
                <ul className="character_list">
                    {
                        dataSource.pmc.map((item, i) => (
                            <a href={'https://github.com/' + item.githubId} key={i} target="_blank">
                                <li className="character_item text_center" style={{'listStyle': 'none'}}>
                                    <img className="character_avatar" src={item.avatarUrl} alt={item.name}/>
                                    <div className="character_desc">
                                        <h3 className="character_name">{item.name}</h3>
                                        <h3 className="character_id"><span className="githubId">githubId:</span>{item.githubId}</h3>
                                    </div>
                                </li>
                            </a>
                        ))
                    }
                </ul>

                <h3 className="team_title">Committers</h3>
                <p className="team_desc">{dataSource.info.tip}</p>
                <ul className="character_list">
                  {
                    dataSource.committer.map((item, i) => (
                      <a href={'https://github.com/' + item.githubId} key={i} target="_blank">
                        <li className="character_item text_center" style={{'listStyle': 'none'}}>
                          <img className="character_avatar" src={item.avatarUrl} alt={item.name}/>
                          <div className="character_desc">
                            <h3 className="character_name">{item.name}</h3>
                            <h3 className="character_id"><span className="githubId">githubId:</span>{item.githubId}</h3>
                          </div>
                        </li>
                      </a>
                    ))
                  }
                </ul>
            </div>
            </div>
        </Layout>
    );
}
