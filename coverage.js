// Public topic names are used for navigation/audit only. All lesson prose is original.
window.COVERAGE_GROUPS=[
['SystemFlow · Fundamentals',[
['System design purpose / HLD / LLD','thinking'],['Functional ও quality requirements','requirements'],['DAU, QPS, storage, bandwidth estimation','estimation'],['Latency / throughput / tail','latency'],['Availability, SLA / SLO / nines','slo'],['Vertical / horizontal scalability','scale-directions'],['CAP trade-off','cap'],['PACELC','pacelc']]],
['SystemFlow · Networking / API',[
['Request lifecycle','request'],['DNS resolution / records / TTL','dns'],['TCP / UDP / HTTP versions','transport'],['REST contracts','api'],['gRPC / GraphQL selection','protocol-choice'],['WebSocket / long polling / SSE','realtime'],['Gateway / API evolution','gateway'],['Rate-limiting algorithms','rate-algorithms']]],
['SystemFlow · Balancing / scaling',[
['Load balancer role','balancing'],['L4 / L7','l4-l7'],['Round robin / weighted / least-connections / affinity','balancing-algorithms'],['Health checks / failover','health-failover'],['Stateless services','stateless'],['Session lifecycle','session-design'],['Autoscaling / cold start','autoscaling'],['Nginx practical','nginx-practical']]],
['SystemFlow · Caching',[
['Cache value / hit ratio','cache-aside'],['Browser / edge / app / DB cache','cache-layers'],['Read-through / write-through / write-back','cache-policies'],['LRU / LFU / TTL','eviction'],['Invalidation / stale reads','invalidation'],['Herd / stampede','stampede'],['CDN / edge policy','cdn'],['Redis practical','redis-practical']]],
['SystemFlow · Data / storage',[
['SQL / NoSQL selection','sql-nosql'],['NoSQL data models','nosql-models'],['B-tree / LSM / Bloom filter','btree-lsm'],['ACID / transactions / isolation','transactions'],['Replication patterns','replication'],['Replica lag / read-your-writes','replication'],['Shards / partitions','sharding'],['Consistent hashing / virtual nodes','consistent-hashing'],['Hot key / hot partition','hot-partitions'],['Blob / object storage','object-storage']]],
['SystemFlow · Async / messaging',[
['Synchronous / asynchronous work','queues'],['RabbitMQ topology / ack','rabbitmq'],['Event streaming / replay','kafka'],['Partitions / groups / offsets','kafka-partitions'],['Pub/sub / fan-out','pubsub'],['Delivery semantics','delivery'],['Idempotency / retries','idempotency'],['DLQ / poison messages','delivery'],['Event architecture / CQRS / event sourcing','event-architecture']]],
['SystemFlow · Distributed systems',[
['Partial failures','partial-failure'],['Consistency models','models'],['Quorum overlap','quorum'],['Raft consensus','raft'],['Leader election / fencing','leader-election'],['Two-phase commit','two-phase-commit'],['Saga / compensation','saga'],['Clocks / causality / ordering','clocks-locks'],['Distributed identifiers','ids']]],
['SystemFlow · Reliability / services',[
['Monolith / microservices','microservices'],['Domain service decomposition','domain-design'],['Discovery / mesh','discovery','service-mesh'],['Circuit breaker / bulkhead / timeout','circuit-breaker'],['Logs / metrics / traces','observability'],['Distributed tracing','observability'],['SLO / error budget','slo'],['Docker / Kubernetes basics','deployment','kubernetes'],['Controlled chaos experiments','chaos']]],
['SystemFlow · Case studies',[
['URL shortening','url-shortener'],['Distributed limiter','rate-limiter-case'],['Realtime messaging','chat-system'],['News-feed fan-out','newsfeed'],['Notifications','notifications'],['Distributed scheduling','scheduler'],['Ride matching / geospatial','ridesharing'],['Video streaming','video-streaming'],['Autocomplete / prefix search','autocomplete'],['Payments / ledger','payments-ledger']]],
['SystemFlow · Interview',[
['Assessment expectations','readiness'],['Timed interview framework','interview'],['Trade-off explanation','tradeoff-review'],['Common interview mistakes','readiness'],['Guided mock: booking','mock-booking'],['Guided mock: webhook delivery','mock-notification'],['Guided mock: chat','mock-chat']]],
['ছবি ১ · ১৫টি engineering area',[
['Requirement gathering / user stories / priority','requirements'],['Architecture / components / maintainability','monolith'],['Data design / schema / retention','schema','retention'],['Domain design / modular boundaries','domain-design'],['Security / encryption / sensitive storage','authentication','files'],['Maintainability / SDLC / evolution','lld','migration'],['Unit / integration / acceptance / performance / security tests','testing-strategy'],['Usability / accessibility / responsive UX','ux'],['Scalability / balancing / cold start','scale-directions','autoscaling'],['Reliability / monitoring / recovery','recovery'],['Availability / redundancy / disaster recovery','replication','recovery'],['Performance / structures / encoding / caching','latency','indexes'],['Cost estimation / TCO / subscriptions / growth','cost'],['Technical docs / runbooks / API docs / user manual','documentation'],['Compatibility / interoperability / data migration','migration']]],
['ছবি ২ · ২০টি core concept',[
['Load balancing','balancing'],['Caching','cache-aside'],['Database sharding','sharding'],['Replication','replication'],['CAP','cap'],['Consistent hashing','consistent-hashing'],['Message queues','queues'],['Rate limiting','rate-algorithms'],['API gateway','gateway'],['Microservices','microservices'],['Service discovery','discovery'],['CDN','cdn'],['Database indexing','indexes'],['Partitioning','sharding'],['Eventual consistency','models'],['WebSockets','realtime'],['Scalability','scale-directions'],['Fault tolerance','circuit-breaker','recovery'],['Monitoring','observability'],['Authentication / authorization','authentication','authorization']]]
];
window.EXTRA_LABS=[
{id:'token',title:'Token bucket limiter',desc:'Burst, refill ও simulated time দিয়ে quota পরীক্ষা করুন।',lesson:'rate-algorithms',icon:'◴'},
{id:'eviction',title:'LRU eviction lab',desc:'Key পড়ুন; capacity ভরলে কোন entry যায় দেখুন।',lesson:'eviction',icon:'▤'},
{id:'hashing',title:'Consistent hashing ring',desc:'Node যোগ/সরিয়ে modulo ও ring remapping তুলনা করুন।',lesson:'consistent-hashing',icon:'◌'},
{id:'quorum',title:'Quorum & availability',desc:'N, R, W ও unreachable nodes বদলে overlap দেখুন।',lesson:'quorum',icon:'⌘'},
{id:'breaker',title:'Circuit breaker state machine',desc:'Failures, cooldown ও recovery probe নিজে চালান।',lesson:'circuit-breaker',icon:'ϟ'},
{id:'kafka-log',title:'Kafka partitions ও consumer groups',desc:'Publish, consume, rewind ও replay দিয়ে log বুঝুন।',lesson:'kafka-partitions',icon:'≋'}
];
