(() => {
  const noteDates = Object.freeze({
    "./papers/agent-lightning-v1-harnessed-rl.html": "2026-08-20",
    "./papers/mone-modular-neural-memory.html": "2026-08-20",
    "./papers/debate-training-rlaif-reward-hacking.html": "2026-08-20",
    "./papers/ogr-generative-slate-recommendation.html": "2026-08-20",
    "./papers/flexrec-layerwise-exits-recommendation.html": "2026-08-20",
    "./papers/impression-share-prediction-ranking.html": "2026-08-20",
    "./papers/le-critique-privileged-value-functions.html": "2026-08-19",
    "./papers/clawgym-ii-black-box-rl.html": "2026-08-19",
    "./papers/proteus-incremental-memory-activation.html": "2026-08-19",
    "./papers/unidot-large-scale-recommendation.html": "2026-08-19",
    "./papers/sdf-recommendation-staleness.html": "2026-08-19",
    "./papers/sahc-ns-negative-sampling.html": "2026-08-19",
    "./papers/envs-forge-agent-rl.html": "2026-08-18",
    "./papers/simpleopd-on-policy-distillation.html": "2026-08-18",
    "./papers/agentrewind-recoverable-execution.html": "2026-08-18",
    "./papers/echorec-cycle-consistent-generative-rec.html": "2026-08-18",
    "./papers/adsworldengine-conversational-ad-agent.html": "2026-08-18",
    "./papers/residual-dominance-sequential-rec.html": "2026-08-18",
    "./papers/ripplemem-associative-recollection.html": "2026-08-17",
    "./papers/vtoken-reclaimable-kv-cache.html": "2026-08-17",
    "./papers/opscale-operator-autoscaling.html": "2026-08-17",
    "./papers/drig-dual-role-identifiers.html": "2026-08-17",
    "./papers/star-pcvr-tokenization.html": "2026-08-17",
    "./papers/fsgr-fair-generative-recommendation.html": "2026-08-17",
    "./papers/gallm-graph-aware-sequential-rec.html": "2026-08-14",
    "./papers/hcgrec-hint-conditioned-generative-rec.html": "2026-08-14",
    "./papers/prism-mixture-perspectives-sequential-rec.html": "2026-08-14",
    "./papers/information-abundance-paradox.html": "2026-08-14",
    "./papers/qv-pic-visual-rag-cache.html": "2026-08-14",
    "./papers/agentic-memory-serving-cost.html": "2026-08-14",
    "./papers/test-time-self-evolving-gui.html": "2026-08-13",
    "./papers/misa-t-mixed-rollout-scheduling.html": "2026-08-13",
    "./papers/cross-lingual-agent-policy-retention.html": "2026-08-13",
    "./papers/sona-generative-music-recommender.html": "2026-08-13",
    "./papers/tie-aware-group-recommendation.html": "2026-08-13",
    "./papers/timeroute-multimodal-recommendation.html": "2026-08-13",
    "./papers/tide-opd.html": "2026-08-12",
    "./papers/metastrategy.html": "2026-08-12",
    "./papers/specformer.html": "2026-08-12",
    "./papers/loopfm.html": "2026-08-12",
    "./papers/linkedin-feed-sr.html": "2026-08-12",
    "./papers/kimi-k3.html": "2026-08-12",
    "./papers/thought-level-beam-search-gambit.html": "2026-08-12",
    "./papers/easybalance-cross-layer-moe.html": "2026-08-12",
    "./papers/persistent-semantic-entities.html": "2026-08-12",
    "./papers/dream-agentic-recommendation.html": "2026-08-12",
    "./papers/pushdualgen-push-recommendation.html": "2026-08-12",
    "./papers/inthq-generative-multitask-recommendation.html": "2026-08-12",
    "./papers/coinrag-nugget-kv-reuse.html": "2026-08-11",
    "./papers/tepa-revocable-memory.html": "2026-08-11",
    "./papers/skillprox-proximal-skill-evolution.html": "2026-08-11",
    "./papers/tm20k-long-sequence-ads.html": "2026-08-11",
    "./papers/miso-ranking-model-optimization.html": "2026-08-11",
    "./papers/progressive-rec-fm-alignment.html": "2026-08-11",
    "./papers/qevict-recoverable-kv-cache.html": "2026-08-10",
    "./papers/lunar-behavioral-personalization.html": "2026-08-10",
    "./papers/envace-world-rehearsal.html": "2026-08-10",
    "./papers/personalized-modality-weighting-audit.html": "2026-08-10",
    "./papers/gryphon-v2-rollout-distillation.html": "2026-08-10",
    "./papers/excise-exclusion-retrieval.html": "2026-08-10",
    "./papers/next.html": "2026-08-07",
    "./papers/reasoning-core-procedural-data.html": "2026-08-07",
    "./papers/skill-entropy-long-horizon.html": "2026-08-07",
    "./papers/abseeker-answer-backtracked-credit.html": "2026-08-07",
    "./papers/degr-generative-reranking.html": "2026-08-07",
    "./papers/twitch-multi-objective-ranking.html": "2026-08-07",
    "./papers/goal-incentivized-advertising.html": "2026-08-07",
    "./papers/sif-sample-level-tokens.html": "2026-08-06",
    "./papers/iat-instance-as-token.html": "2026-08-06",
    "./papers/turnsight-hindsight-self-distillation.html": "2026-08-06",
    "./papers/pi-mem-parallel-iterative-memory.html": "2026-08-06",
    "./papers/continual-skill-bench.html": "2026-08-06",
    "./papers/atlas-unseen-domain-recommendation.html": "2026-08-06",
    "./papers/sita-semantic-interest-tokens.html": "2026-08-06",
    "./papers/kgd-streaming-recommendation.html": "2026-08-06",
    "./papers/semantic-native-lsm.html": "2026-08-05",
    "./papers/livemem-state-continuity.html": "2026-08-05",
    "./papers/qwen-cua-native-computer-use.html": "2026-08-05",
    "./papers/longcat-sparse-attention.html": "2026-08-05",
    "./papers/steps-self-triggered-push-recommendation.html": "2026-08-05",
    "./papers/smartgr-distillation.html": "2026-08-05",
    "./papers/grace-generative-ads-retrieval.html": "2026-08-05",
    "./papers/know-act-memory-utilization.html": "2026-08-04",
    "./papers/data-turnstile-function-calling.html": "2026-08-04",
    "./papers/toktier-stateful-tokenization.html": "2026-08-04",
    "./papers/gala-multimodal-taobao-shangou.html": "2026-08-04",
    "./papers/recharness-agentic-recommender.html": "2026-08-04",
    "./papers/snaplgr-generative-retrieval.html": "2026-08-04",
    "./papers/oxygenrec-v2.html": "2026-08-03",
    "./papers/osreward-computer-use-reward-models.html": "2026-08-03",
    "./papers/askchem-claim-centered-literature-synthesis.html": "2026-08-03",
    "./papers/retoken-visual-retrieval.html": "2026-08-03",
    "./papers/hilar-hierarchical-latent-reasoning-recommendation.html": "2026-08-03",
    "./papers/feedback-grounded-policy-generative-recommendation.html": "2026-08-03",
    "./papers/open-web-user-foundation-model.html": "2026-08-03",
    "./papers/ccformer-tencent-industrial-recommendation.html": "2026-08-05",
    "./papers/rocs-request-oriented-compute-sharing.html": "2026-07-31",
    "./papers/ha-moe-heterogeneous-ranking-google-discover.html": "2026-07-31",
    "./papers/beta-opsd-policy-optimization-self-distillation.html": "2026-07-31",
    "./papers/manta-multi-agent-topology-adaptation.html": "2026-07-31",
    "./papers/frontis-ma1-openmle-ai4ai.html": "2026-07-31",
    "./papers/gear-long-context.html": "2026-07-23",
    "./papers/oc-grpo.html": "2026-07-23",
    "./papers/adaflash.html": "2026-07-23",
    "./papers/tsgr.html": "2026-07-23",
    "./papers/ddmsr.html": "2026-07-23",
    "./papers/topotok.html": "2026-07-23",
    "./papers/pagedweight-moe-serving.html": "2026-07-21",
    "./papers/pretraining-to-posttraining-reasoning.html": "2026-07-21",
    "./papers/toolsciver-multimodal-verification.html": "2026-07-21",
    "./papers/recgpt-v3.html": "2026-07-21",
    "./papers/recap-streaming-user-profiles.html": "2026-07-21",
    "./papers/layerwise-crosslingual-relevance.html": "2026-07-21",
    "./papers/longstraw-long-context-rl.html": "2026-07-20",
    "./papers/prem-context-compression.html": "2026-07-20",
    "./papers/seed-agentic-rl.html": "2026-07-20",
    "./papers/long-history-ad-ranking.html": "2026-07-20",
    "./papers/pinterest-causal-retrieval.html": "2026-07-20",
    "./papers/pinterest-downstream-rewards.html": "2026-07-20",
    "./papers/trace-turn-level-credit.html": "2026-07-17",
    "./papers/agent-optimizers-compound.html": "2026-07-17",
    "./papers/post-training-confidence-posconf.html": "2026-07-17",
    "./papers/tmallgs-generative-search-ranking.html": "2026-07-17",
    "./papers/apple-incremental-video-search.html": "2026-07-17",
    "./papers/cluster-with-auctions-vector-search.html": "2026-07-17",
    "./papers/e3-complexity-aware-agents.html": "2026-07-16",
    "./papers/memops-lifecycle-memory.html": "2026-07-16",
    "./papers/function-aware-fim-midtraining.html": "2026-07-16",
    "./papers/slimper-personalization-model.html": "2026-07-16",
    "./papers/nontp-generative-recommendation.html": "2026-07-16",
    "./papers/mesh-heterogeneous-retrieval.html": "2026-07-16",
    "./papers/scope-rl-reasoning-paths.html": "2026-07-15",
    "./papers/unfair-judge-activation-bias.html": "2026-07-15",
    "./papers/armt-associative-recurrent-memory.html": "2026-07-15",
    "./papers/mmrm-ecommerce-ranking.html": "2026-07-15",
    "./papers/stresa-multimodal-sequential-rec.html": "2026-07-15",
    "./papers/zorro-zero-weight-news-rec.html": "2026-07-15",
    "./papers/workflow-as-knowledge.html": "2026-07-14",
    "./papers/citation-verifier-calibration.html": "2026-07-14",
    "./papers/smetric-agent-serving.html": "2026-07-14",
    "./papers/llm-city-recommendation-visibility.html": "2026-07-14",
    "./papers/vtmr-video-music-recommendation.html": "2026-07-14",
    "./papers/ssc-loop-signed-graph-recommendation.html": "2026-07-14",
    "./papers/uniclawbench-proactive-agents.html": "2026-07-13",
    "./papers/proactive-memory-agent.html": "2026-07-13",
    "./papers/llm-quantization-equivalency.html": "2026-07-13",
    "./papers/bach-multi-interest-retrieval.html": "2026-07-13",
    "./papers/dav-gen-draft-verify.html": "2026-07-13",
    "./papers/pit-sun-recommender-regression.html": "2026-07-13",
    "./papers/co-lmlm-continuous-query-memory.html": "2026-07-10",
    "./papers/linear-transformer-analysis.html": "2026-07-10",
    "./papers/sao-agentic-rl.html": "2026-07-10",
    "./papers/mmeacr-agentic-recommendation.html": "2026-07-10",
    "./papers/large-behavior-model-retail.html": "2026-07-10",
    "./papers/cope-dynamic-preference-elicitation.html": "2026-07-10",
    "./papers/pathological-closed-loop-recommendation.html": "2026-07-09",
    "./papers/influ-match-kol-search.html": "2026-07-09",
    "./papers/canni-uplift-ecommerce.html": "2026-07-09",
    "./papers/kvpop-predictive-kv-cache.html": "2026-07-09",
    "./papers/compactionrl-context-compaction.html": "2026-07-09",
    "./papers/dynakrag-evidence-control.html": "2026-07-09",
    "./papers/scored.html": "2026-07-08",
    "./papers/llm-as-a-verifier.html": "2026-07-08",
    "./papers/metaskill-evolve.html": "2026-07-08",
    "./papers/direct-opd.html": "2026-07-08",
    "./papers/lbr-length-bias-recommendation.html": "2026-07-08",
    "./papers/unisgr-semantic-id-ranking.html": "2026-07-08",
    "./papers/chronosid-temporal-gap-tokenization.html": "2026-07-08",
    "./papers/coldgenrec-cold-starts.html": "2026-07-07",
    "./papers/diffusion-gr2-reasoning-reranker.html": "2026-07-07",
    "./papers/hnsw-accuracy-guarantees-spanners.html": "2026-07-07",
    "./papers/agentic-search-earth-observation.html": "2026-07-07",
    "./papers/checkrlm-rag-coherence-checking.html": "2026-07-07",
    "./papers/agenticsts-bounded-memory-agents.html": "2026-07-07",
    "./papers/driftlens-personalized-reasoning-drift.html": "2026-07-07",
    "./papers/mf-mdp-candidate-generation.html": "2026-07-06",
    "./papers/intenttune-ecommerce-search.html": "2026-07-06",
    "./papers/bi-nas-recsys-explanation.html": "2026-07-06",
    "./papers/lacuna-llm-unlearning-localization.html": "2026-07-06",
    "./papers/recontext-evidence-replay-long-context.html": "2026-07-06",
    "./papers/hola-linear-attention-memory.html": "2026-07-06",
    "./papers/ann-index-local-repair.html": "2026-07-03",
    "./papers/goobs-llm-hard-negative-two-tower.html": "2026-07-03",
    "./papers/as-it-was-search-evaluation.html": "2026-07-03",
    "./papers/memsyco-bench.html": "2026-07-03",
    "./papers/automem.html": "2026-07-03",
    "./papers/planrag-logical-query-trees.html": "2026-07-03",
    "./papers/shopx-agentic-shopping.html": "2026-07-02",
    "./papers/genpage-netflix-homepage.html": "2026-07-02",
    "./papers/monosemanticity-recommender-systems.html": "2026-07-02",
    "./papers/neural-procedural-memory.html": "2026-07-02",
    "./papers/vista-latent-context-managers.html": "2026-07-02",
    "./papers/sekv-hierarchical-semantic-kv-cache.html": "2026-07-02",
    "./papers/iid-nav-progressive-retrieval.html": "2026-07-01",
    "./papers/llm-cold-start-retrieval-bottleneck.html": "2026-07-01",
    "./papers/poem-real-time-sequential-rec.html": "2026-07-01",
    "./papers/worldevolver-llm-agent-planning.html": "2026-07-01",
    "./papers/agents-a1-horizon-scaling.html": "2026-07-01",
    "./papers/know-before-you-fetch-rag-budget.html": "2026-07-01",
    "./papers/glan-personalized-landing-page.html": "2026-06-30",
    "./papers/inturec-latent-reasoning-rec.html": "2026-06-30",
    "./papers/perm-r-constrained-reranking.html": "2026-06-30",
    "./papers/l2a-dynamic-sparsity-llm.html": "2026-06-30",
    "./papers/jd-oxygen-aiic.html": "2026-06-30",
    "./papers/shift-rag-conflict-mitigation.html": "2026-06-30",
    "./papers/nova-rec-architecture-evolution.html": "2026-06-29",
    "./papers/trust-temporal-session-rec.html": "2026-06-29",
    "./papers/uniformer-industrial-rec.html": "2026-06-29",
    "./papers/socialpersona.html": "2026-06-29",
    "./papers/carve-linear-attention.html": "2026-06-29",
    "./papers/provenai-rag-provenance.html": "2026-06-29",
    "./papers/s2-car.html": "2026-06-26",
    "./papers/adaptsim.html": "2026-06-26",
    "./papers/trajectory-based-rs-control.html": "2026-06-26",
    "./papers/progress-advantage.html": "2026-06-26",
    "./papers/spiral-search-aggregate.html": "2026-06-26",
    "./papers/dustin-long-context.html": "2026-06-26",
    "./papers/autorelannotator.html": "2026-06-25",
    "./papers/recommendation-as-generation.html": "2026-06-25",
    "./papers/tokenminds.html": "2026-06-25",
    "./papers/toolbench-x.html": "2026-06-25",
    "./papers/tool-rl-collapse.html": "2026-06-25",
    "./papers/graphrag-needed.html": "2026-06-25",
    "./papers/bear.html": "2026-06-24",
    "./papers/openthoughts-agent.html": "2026-06-24",
    "./papers/agent-native-memory.html": "2026-06-24",
    "./papers/grad-detect.html": "2026-06-24",
    "./papers/dialogue-to-discovery.html": "2026-06-24",
    "./papers/llm-annotated-dense-retrieval.html": "2026-06-24",
    "./papers/llm-judge-topk-rec.html": "2026-06-24",
    "./papers/recloop.html": "2026-06-18",
    "./papers/iirg.html": "2026-06-18",
    "./papers/srpfn.html": "2026-06-18",
    "./papers/variable-width-transformers.html": "2026-06-18",
    "./papers/zppo.html": "2026-06-18",
    "./papers/latent-memories.html": "2026-06-18",
    "./papers/deeprubric.html": "2026-06-17",
    "./papers/tokenpilot.html": "2026-06-17",
    "./papers/kveraser.html": "2026-06-17",
    "./papers/onerank.html": "2026-06-17",
    "./papers/reaemb.html": "2026-06-17",
    "./papers/holorec.html": "2026-06-17",
    "./papers/akt-rec.html": "2026-06-16",
    "./papers/adasr.html": "2026-06-16",
    "./papers/agentspec.html": "2026-06-16",
    "./papers/streammembench.html": "2026-06-16",
    "./papers/chronoid.html": "2026-06-16",
    "./papers/pauserec.html": "2026-06-16",
    "./papers/pad-denoising.html": "2026-06-16",
    "./papers/onetrieval.html": "2026-06-15",
    "./papers/helmsman.html": "2026-06-15",
    "./papers/cfalr.html": "2026-06-15",
    "./papers/cqc-rag.html": "2026-06-15",
    "./papers/resum.html": "2026-06-15",
    "./papers/proreviewer.html": "2026-06-15",
    "./papers/appo.html": "2026-06-12",
    "./papers/worldreasoner.html": "2026-06-12",
    "./papers/horma.html": "2026-06-12",
    "./papers/rankguard.html": "2026-06-12",
    "./papers/air.html": "2026-06-12",
    "./papers/tau-rec.html": "2026-06-12",
    "./papers/diffcold.html": "2026-06-11",
    "./papers/llm-user-personas.html": "2026-06-11",
    "./papers/genair.html": "2026-06-11",
    "./papers/doc2atom.html": "2026-06-11",
    "./papers/cdic.html": "2026-06-11",
    "./papers/races.html": "2026-06-11",
    "./papers/fcrllm.html": "2026-06-11",
    "./papers/iam-item-aware-attention.html": "2026-06-10",
    "./papers/agentselect.html": "2026-06-10",
    "./papers/prism.html": "2026-06-09",
    "./papers/bernini.html": "2026-06-08",
    "./papers/bt-rankings.html": "2026-06-08",
    "./papers/gbla-generative-retrieval.html": "2026-06-08",
    "./papers/calir.html": "2026-06-08",
    "./papers/embedfilter.html": "2026-06-08",
    "./papers/prefix-utility-model.html": "2026-06-08",
    "./papers/dycon.html": "2026-06-08",
    "./papers/onereason.html": "2026-06-05",
    "./papers/latent-reasoning-flows.html": "2026-06-05",
    "./papers/oprd.html": "2026-06-05",
    "./papers/agent-skill-discovery.html": "2026-06-05",
    "./papers/coexrec.html": "2026-06-05",
    "./papers/ace-llm-sr.html": "2026-06-05",
    "./papers/xetrieval.html": "2026-06-05",
    "./papers/uxsid.html": "2026-06-04",
    "./papers/streamma.html": "2026-06-04",
    "./papers/see.html": "2026-06-04",
    "./papers/depth-attention.html": "2026-06-04",
    "./papers/ds-mlp.html": "2026-06-04",
    "./papers/carbon-aware-rerank.html": "2026-06-04",
    "./papers/rgcd-rep.html": "2026-06-04",
    "./papers/flowtime.html": "2026-06-03",
    "./papers/tsinghua-taiji.html": "2026-06-03",
    "./papers/fudan-mars.html": "2026-06-03",
    "./papers/pinterest-unipinrec.html": "2026-06-03",
    "./papers/ucsd-acts.html": "2026-06-03",
    "./papers/georgiatech-qubric.html": "2026-06-03",
    "./papers/neuq-hybridthinker.html": "2026-06-03",
    "./papers/bitlm.html": "2026-06-02",
    "./papers/gfn4retention.html": "2026-06-02",
    "./papers/rhelm.html": "2026-06-02",
    "./papers/safeau.html": "2026-06-02",
    "./papers/foster.html": "2026-06-02",
    "./papers/llm-wiki.html": "2026-06-01",
    "./papers/schgen.html": "2026-06-01",
    "./papers/kbf.html": "2026-06-01",
    "./papers/ragear.html": "2026-06-01",
    "./papers/explicit-feedback-rec.html": "2026-06-01",
    "./papers/ncce.html": "2026-06-01",
    "./papers/nalaformer.html": "2026-06-01",
    "./papers/harvard-compression-math.html": "2026-05-31",
    "./papers/memft-parametric-memory.html": "2026-05-31",
    "./papers/critic-r1.html": "2026-05-31",
    "./papers/entity-collision.html": "2026-05-31",
    "./papers/ufrec.html": "2026-05-31",
    "./papers/pinterest-ads-llm.html": "2026-05-31",
    "./papers/gemini-embedding-2.html": "2026-05-30",
    "./papers/asymrec.html": "2026-05-30",
    "./papers/stv.html": "2026-05-29",
    "./papers/gplan.html": "2026-05-29",
    "./papers/bes.html": "2026-05-28",
    "./papers/sgsd.html": "2026-05-28",
    "./papers/memtrace.html": "2026-05-28",
    "./papers/amrs.html": "2026-05-28",
    "./papers/mixragrec.html": "2026-05-28",
    "./papers/sid-tokenizer-reliability.html": "2026-05-28",
    "./papers/resid.html": "2026-05-27",
    "./papers/rsir.html": "2026-05-27",
    "./papers/lm-sleep.html": "2026-05-27",
    "./papers/veritrace.html": "2026-05-27",
    "./papers/auto-benchmark-audit.html": "2026-05-27",
    "./papers/meta-modal-agent.html": "2026-05-27",
    "./papers/lens-ctr.html": "2026-05-27",
    "./papers/rankaid.html": "2026-05-27",
    "./papers/sa2crq.html": "2026-05-27",
    "./papers/claw-anything.html": "2026-05-26",
    "./papers/legal-search-r1.html": "2026-05-26",
    "./papers/dvao.html": "2026-05-26",
    "./papers/degre.html": "2026-05-26",
    "./papers/siren.html": "2026-05-26",
    "./papers/qgs-quark.html": "2026-05-26",
    "./papers/skillopt.html": "2026-05-25",
    "./papers/memaudit.html": "2026-05-25",
    "./papers/parallel-context-compaction.html": "2026-05-25",
    "./papers/tubifm.html": "2026-05-25",
    "./papers/harness-lm.html": "2026-05-25",
    "./papers/netflix-generative-recommenders.html": "2026-05-25",
    "./papers/interformer.html": "2026-05-25",
    "./papers/pearl-livestream.html": "2026-05-25",
    "./papers/wukong.html": "2026-05-25",
    "./papers/kunlun.html": "2026-05-24",
    "./papers/kairos-data-temporality.html": "2026-05-24",
    "./papers/lcguard.html": "2026-05-24",
    "./papers/deltabox.html": "2026-05-24",
    "./papers/abpo-llm-rec.html": "2026-05-24",
    "./papers/tgq-former.html": "2026-05-24",
    "./papers/genli-ctr.html": "2026-05-24",
    "./papers/airbnb-cold-start-search.html": "2026-05-23",
    "./papers/gcrs.html": "2026-05-23",
    "./papers/thinkgr.html": "2026-05-23",
    "./papers/vpo.html": "2026-05-23",
    "./papers/gated-deltanet-2.html": "2026-05-23",
    "./papers/moss-self-evolution.html": "2026-05-23",
    "./papers/bgcc-multimodal-recommendation.html": "2026-05-25",
    "./papers/rporec.html": "2026-05-22",
    "./papers/llm-ad-retrieval.html": "2026-05-28",
    "./papers/search-e1.html": "2026-05-22",
    "./papers/defermem.html": "2026-05-22",
    "./papers/arborkv.html": "2026-05-22",
    "./papers/multimodal-gr-cost-paradox.html": "2026-05-22",
    "./papers/mem-pi.html": "2026-05-21",
    "./papers/pals.html": "2026-05-21",
    "./papers/agent-jit.html": "2026-05-21",
    "./papers/ltc-rerank.html": "2026-05-21",
    "./papers/mdcns.html": "2026-05-21",
    "./papers/delta-rlvr.html": "2026-05-21",
    "./papers/icml-2026-recsys-ad-llm-selection.html": "2026-05-21",
    "./papers/causaldpo.html": "2026-05-21",
    "./papers/hyprq-vae.html": "2026-05-21",
    "./papers/syngr.html": "2026-05-21",
    "./papers/macrec.html": "2026-05-21",
    "./papers/mql4grec.html": "2026-05-21",
    "./papers/memweaver.html": "2026-05-21",
    "./papers/tide-dllm.html": "2026-05-20",
    "./papers/graft.html": "2026-05-20",
    "./papers/balancerag.html": "2026-05-20",
    "./papers/peek.html": "2026-05-20",
    "./papers/m3bert.html": "2026-05-20",
    "./papers/d3-subsidy.html": "2026-05-20",
    "./papers/ragr.html": "2026-05-19",
    "./papers/dadf.html": "2026-05-19",
    "./papers/growthgr.html": "2026-05-19",
    "./papers/epic.html": "2026-05-19",
    "./papers/dashattention.html": "2026-05-19",
    "./papers/sapo.html": "2026-05-19",
    "./papers/latte.html": "2026-05-19",
    "./papers/capsid.html": "2026-05-19",
    "./papers/trinity.html": "2026-05-19",
    "./papers/varlenrec.html": "2026-05-19",
    "./papers/recgpt-mobile.html": "2026-05-19",
    "./papers/tiger.html": "2026-05-19",
    "./papers/marm.html": "2026-05-19",
    "./papers/llm2rec.html": "2026-05-19",
    "./papers/perpeft.html": "2026-05-31",
  });

  const newsDates = Object.freeze({
    "./news/2026-08-20.html": "2026-08-20",
    "./news/2026-08-19.html": "2026-08-19",
    "./news/2026-08-18.html": "2026-08-18",
    "./news/2026-08-17.html": "2026-08-17",
    "./news/2026-08-14.html": "2026-08-14",
    "./news/2026-08-13.html": "2026-08-13",
    "./news/2026-08-12.html": "2026-08-12",
    "./news/2026-08-11.html": "2026-08-11",
    "./news/2026-08-10.html": "2026-08-10",
    "./news/2026-08-07.html": "2026-08-07",
    "./news/2026-08-06.html": "2026-08-06",
    "./news/2026-08-05.html": "2026-08-05",
    "./news/2026-08-04.html": "2026-08-04",
    "./news/2026-07-23.html": "2026-07-23",
    "./news/2026-07-22.html": "2026-07-22",
    "./news/2026-07-21.html": "2026-07-21",
    "./news/2026-07-20.html": "2026-07-20",
    "./news/2026-07-17.html": "2026-07-17",
    "./news/2026-07-15.html": "2026-07-15",
    "./news/2026-07-14.html": "2026-07-14",
    "./news/2026-07-13.html": "2026-07-13",
    "./news/2026-07-10.html": "2026-07-10",
    "./news/2026-07-09.html": "2026-07-09",
    "./news/2026-07-08.html": "2026-07-08",
    "./news/2026-07-06.html": "2026-07-06",
    "./news/2026-07-01.html": "2026-07-01",
    "./news/2026-06-30.html": "2026-06-30",
    "./news/2026-06-26.html": "2026-06-26",
    "./news/2026-06-25.html": "2026-06-25",
    "./news/2026-06-19.html": "2026-06-19",
    "./news/2026-06-18.html": "2026-06-18",
    "./news/2026-06-17.html": "2026-06-17",
    "./news/2026-06-16.html": "2026-06-16",
    "./news/2026-06-15.html": "2026-06-15",
    "./news/2026-06-12.html": "2026-06-12",
    "./news/2026-06-09.html": "2026-06-09",
    "./news/2026-06-07.html": "2026-06-07",
    "./news/2026-06-06.html": "2026-06-06",
    "./news/2026-06-04.html": "2026-06-04",
    "./news/2026-06-03.html": "2026-06-03",
    "./news/2026-06-02.html": "2026-06-02",
    "./news/2026-06-01.html": "2026-06-01",
    "./news/2026-05-30.html": "2026-05-30",
    "./news/2026-05-29.html": "2026-05-29",
    "./news/2026-05-28.html": "2026-05-28",
    "./news/2026-05-27.html": "2026-05-27",
    "./news/2026-05-26.html": "2026-05-26",
  });

  const marketDates = Object.freeze({
    "./market/2026-08-20.html": "2026-08-20",
    "./market/2026-08-19.html": "2026-08-19",
    "./market/2026-08-18.html": "2026-08-18",
    "./market/2026-08-17.html": "2026-08-17",
    "./market/2026-08-14.html": "2026-08-14",
    "./market/2026-08-13.html": "2026-08-13",
    "./market/2026-08-12.html": "2026-08-12",
    "./market/2026-08-11.html": "2026-08-11",
    "./market/2026-08-10.html": "2026-08-10",
    "./market/2026-08-07.html": "2026-08-07",
    "./market/2026-08-06.html": "2026-08-06",
    "./market/2026-08-05.html": "2026-08-05",
    "./market/2026-08-04.html": "2026-08-04",
    "./market/2026-08-03.html": "2026-08-03",
    "./market/2026-07-23.html": "2026-07-23",
    "./market/2026-07-17.html": "2026-07-17",
    "./market/2026-07-16.html": "2026-07-16",
    "./market/2026-07-15.html": "2026-07-15",
    "./market/2026-07-14.html": "2026-07-14",
    "./market/2026-07-13.html": "2026-07-13",
    "./market/2026-07-10.html": "2026-07-10",
    "./market/2026-07-09.html": "2026-07-09",
    "./market/2026-07-08.html": "2026-07-08",
    "./market/2026-07-06.html": "2026-07-06",
    "./market/2026-07-03.html": "2026-07-03",
    "./market/2026-07-01.html": "2026-07-01",
    "./market/2026-06-30.html": "2026-06-30",
    "./market/2026-06-29.html": "2026-06-29",
    "./market/2026-06-26.html": "2026-06-26",
    "./market/2026-06-25.html": "2026-06-25",
    "./market/2026-06-19.html": "2026-06-19",
    "./market/2026-06-15.html": "2026-06-15",
    "./market/2026-06-12.html": "2026-06-12",
    "./market/2026-06-09.html": "2026-06-09",
    "./market/2026-06-08.html": "2026-06-08",
    "./market/2026-06-05.html": "2026-06-05",
    "./market/2026-06-04.html": "2026-06-04",
    "./market/2026-06-03.html": "2026-06-03",
    "./market/2026-06-02.html": "2026-06-02",
    "./market/2026-06-01.html": "2026-06-01",
    "./market/2026-05-29.html": "2026-05-29",
    "./market/2026-05-28.html": "2026-05-28",
    "./market/2026-05-27.html": "2026-05-27",
    "./market/2026-05-26.html": "2026-05-26",
  });

  const housingDates = Object.freeze({
    "./housing/2026-08-14.html": "2026-08-14",
    "./housing/2026-08-07.html": "2026-08-07",
    "./housing/2026-07-17.html": "2026-07-17",
    "./housing/2026-07-10.html": "2026-07-10",
    "./housing/2026-07-03.html": "2026-07-03",
    "./housing/2026-06-26.html": "2026-06-26",
    "./housing/2026-06-24.html": "2026-06-24",
    "./housing/2026-06-19.html": "2026-06-19",
    "./housing/2026-06-12.html": "2026-06-12",
    "./housing/2026-06-05.html": "2026-06-05",
    "./housing/2026-06-04.html": "2026-06-04",
    "./housing/2026-06-03.html": "2026-06-03",
    "./housing/2026-06-02.html": "2026-06-02",
    "./housing/2026-05-30.html": "2026-05-30",
    "./housing/2026-05-31.html": "2026-05-31",
    "./housing/2026-05-29.html": "2026-05-29",
    "./housing/2026-05-28.html": "2026-05-28",
    "./housing/2026-05-27.html": "2026-05-27",
    "./housing/2026-05-24.html": "2026-05-24",
  });

  const setText = (selector, value) => {
    const node = document.querySelector(selector);
    if (node) node.textContent = value;
  };

  const normalizeHref = (href) => {
    if (!href) return "";

    try {
      const url = new URL(href, window.location.href);
      const markers = ["/papers/", "/news/", "/market/", "/housing/"];
      for (const marker of markers) {
        const index = url.pathname.indexOf(marker);
        if (index !== -1) {
          return `.${marker}${url.pathname.slice(index + marker.length)}`;
        }
      }
      return href;
    } catch {
      return href;
    }
  };

  const dateForNode = (node) => {
    const link = node.matches("a") ? node : node.querySelector("a");
    if (!link) return "";

    const normalizedHref = normalizeHref(link.getAttribute("href"));
    const date =
      link.dataset.noteDate ||
      noteDates[normalizedHref] ||
      newsDates[normalizedHref] ||
      marketDates[normalizedHref] ||
      housingDates[normalizedHref];
    if (date) link.dataset.noteDate = date;
    return date || "";
  };

  const formatDate = (date) => date.replaceAll("-", ".");
  const formatMonth = (date) => date.slice(0, 7).replace("-", ".");
  const latestDate = (nodes) => nodes.map(dateForNode).filter(Boolean).sort().at(-1) || "";
  const ensureNoteDate = (node, date) => {
    if (!date) return;

    const main = node.querySelector(".library-main");
    if (!main) return;

    let dateNode = main.querySelector(".library-note-date");
    if (!dateNode) {
      dateNode = document.createElement("time");
      dateNode.className = "library-note-date";
      main.prepend(dateNode);
    }

    dateNode.dateTime = date;
    dateNode.textContent = `记录：${formatDate(date)}`;
  };

  const syncHome = () => {
    const recentItems = [...document.querySelectorAll(".recent-item")];

    recentItems.forEach((item) => {
      const date = dateForNode(item);
      if (!date) return;

      let dateNode = item.querySelector(".recent-date");
      if (!dateNode) {
        dateNode = document.createElement("time");
        dateNode.className = "recent-date";
        item.append(dateNode);
      }

      dateNode.dateTime = date;
      dateNode.textContent = formatDate(date);
    });

    const count = recentItems.length;
    const paperCount = count || Object.keys(noteDates).length;
    const latest = latestDate(recentItems) || Object.values(noteDates).sort().at(-1) || "";
    const newsCount = Object.keys(newsDates).length;
    const newsLatest = Object.values(newsDates).sort().at(-1) || "";
    const marketCount = Object.keys(marketDates).length;
    const marketLatest = Object.values(marketDates).sort().at(-1) || "";
    const housingCount = Object.keys(housingDates).length;
    const housingLatest = Object.values(housingDates).sort().at(-1) || "";
    const latestSiteDate = [latest, newsLatest, marketLatest, housingLatest].filter(Boolean).sort().at(-1);

    setText("#home-note-count", String(paperCount));
    setText("#recent-count", `${count} / ${count}`);
    setText("#home-news-count", String(newsCount));
    setText("#home-market-count", String(marketCount));
    setText("#home-housing-count", String(housingCount));
    if (latest) setText("#home-paper-latest", `最新同步：${latest}`);
    if (newsLatest) setText("#home-news-latest", `最新同步：${newsLatest}`);
    if (marketLatest) setText("#home-market-latest", `最新同步：${marketLatest}`);
    if (housingLatest) setText("#home-housing-latest", `最新同步：${housingLatest}`);
    if (latestSiteDate) setText("#home-updated", formatMonth(latestSiteDate));
  };

  const syncLibrary = () => {
    const paperList = document.querySelector("#paper-list");
    const libraryPapers = [...document.querySelectorAll("#paper-list .library-paper")];
    if (!paperList || !libraryPapers.length) return;

    const count = libraryPapers.length;
    const latest = latestDate(libraryPapers);
    const searchInput = document.querySelector("#paper-search");
    const resultCount = document.querySelector("#result-count");
    const noteOrder = new Map(Object.keys(noteDates).map((href, index) => [href, index]));

    libraryPapers
      .map((paper, originalIndex) => {
        const link = paper.querySelector("a");
        const href = normalizeHref(link?.getAttribute("href"));
        return {
          paper,
          date: dateForNode(paper),
          order: noteOrder.get(href) ?? Number.MAX_SAFE_INTEGER,
          originalIndex,
        };
      })
      .sort((left, right) =>
        right.date.localeCompare(left.date) ||
        left.order - right.order ||
        left.originalIndex - right.originalIndex
      )
      .forEach(({ paper, date }, index) => {
        ensureNoteDate(paper, date);
        const indexNode = paper.querySelector(".library-index");
        if (indexNode) indexNode.textContent = String(index + 1).padStart(2, "0");
        paperList.append(paper);
      });

    setText("#library-note-count", String(count));
    if (latest) setText("#library-latest", latest);
    if (resultCount && (!searchInput || searchInput.value.trim() === "")) {
      resultCount.textContent = `${count} 篇`;
    }
  };

  const syncNewsLibrary = () => {
    const reports = [...document.querySelectorAll(".news-list .library-paper")];
    if (!reports.length) return;

    const count = reports.length;
    const latest = latestDate(reports);
    const searchInput = document.querySelector("#news-search");
    const resultCount = document.querySelector("#news-result-count");

    setText("#news-report-count", String(count));
    if (latest) setText("#news-latest", latest);
    if (resultCount && (!searchInput || searchInput.value.trim() === "")) {
      resultCount.textContent = `${count} 篇`;
    }
  };

  const syncMarketLibrary = () => {
    const reports = [...document.querySelectorAll(".market-list .library-paper")];
    if (!reports.length) return;

    const count = reports.length;
    const latest = latestDate(reports);
    const searchInput = document.querySelector("#market-search");
    const resultCount = document.querySelector("#market-result-count");

    setText("#market-report-count", String(count));
    if (latest) setText("#market-latest", latest);
    if (resultCount && (!searchInput || searchInput.value.trim() === "")) {
      resultCount.textContent = `${count} 篇`;
    }
  };

  const syncHousingLibrary = () => {
    const reports = [...document.querySelectorAll(".housing-list .library-paper")];
    if (!reports.length) return;

    const count = reports.length;
    const latest = latestDate(reports);
    const searchInput = document.querySelector("#housing-search");
    const resultCount = document.querySelector("#housing-result-count");

    setText("#housing-report-count", String(count));
    if (latest) setText("#housing-latest", latest);
    if (resultCount && (!searchInput || searchInput.value.trim() === "")) {
      resultCount.textContent = `${count} 篇`;
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    syncHome();
    syncLibrary();
    syncNewsLibrary();
    syncMarketLibrary();
    syncHousingLibrary();
  });
})();
